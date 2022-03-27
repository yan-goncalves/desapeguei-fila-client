/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-array-constructor */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloError, useMutation } from '@apollo/client'
import { joiResolver } from '@hookform/resolvers/joi'
import { Fade, Grid } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import AutocompleteInput from 'components/AutocompleteInput'
import Button from 'components/Button'
import FormControlLabelCheckbox from 'components/FormControlLabelCheckbox'
import HelperText from 'components/HelperText'
import RadioGroup from 'components/RadioGroup'
import RegisterFailed from 'components/RegisterFailed'
import RegisterSuccess from 'components/RegisterSuccess'
import TextField from 'components/TextField'
import { CREATE_SUPPLIER } from 'graphql/queries/create'
import Joi from 'joi'
import { useEffect, useLayoutEffect, useState } from 'react'
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm
} from 'react-hook-form'
import * as S from './styles'

type Estado = { sigla: string; nome: string }
type Tamanhos = 'pp' | 'p' | 'm' | 'g' | 'gg' | 'ps'

const minQuantidade = 30
const pattern = /\d\d\d\d\d-\d\d\d/
const API_CEP = (cep: string) => `https://viacep.com.br/ws/${cep}/json/`

const estados: string[] = new Array()
const API_ESTADOS =
  'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'

export interface IFormInputsTamanhos {
  key: Tamanhos
  label: string
  checked: boolean
  quantidade?: number
}

export interface IFormInputs {
  nome: string
  sobrenome: string
  whatsapp: string
  cep: string
  endereco: string
  numero: number
  complemento?: string
  bairro: string
  cidade: string
  estado: string
  quantidadeTotal: number
  estacao: string
  tamanhos: IFormInputsTamanhos[]
  comoNosConheceu: string
}

const schema = Joi.object<IFormInputs>({
  nome: Joi.string().required(),
  sobrenome: Joi.string().required(),
  whatsapp: Joi.string()
    .required()
    .regex(/\([1-9][1-9]\) \d \d\d\d\d-\d\d\d\d/),
  cep: Joi.string()
    .required()
    .regex(/\d\d\d\d\d-\d\d\d/),
  endereco: Joi.string().required(),
  numero: Joi.number().required(),
  complemento: Joi.optional(),
  bairro: Joi.string().required(),
  cidade: Joi.string().required(),
  estado: Joi.string().required(),
  quantidadeTotal: Joi.number().required().min(minQuantidade),
  estacao: Joi.string().required(),
  tamanhos: Joi.array()
    .items(
      Joi.object({
        key: Joi.string().required(),
        label: Joi.string().required(),
        checked: Joi.boolean().required(),
        quantidade: Joi.when('checked', {
          is: true,
          then: Joi.number().required().min(1)
        })
      })
    )
    .has(
      Joi.object().keys({
        key: Joi.string().required(),
        label: Joi.string().required(),
        checked: Joi.boolean().invalid(false).required(),
        quantidade: Joi.optional()
      })
    )
    .custom((value: IFormInputsTamanhos[], helpers) => {
      const totalTamanhos = value.reduce((a, b) => a + (b?.quantidade || 0), 0)
      const hasEqualZero = value.filter(
        (a) => a.checked && Number(a.quantidade) === 0
      ).length
      const { quantidadeTotal } = helpers.state.ancestors[0]

      if (
        !!quantidadeTotal &&
        hasEqualZero === 0 &&
        totalTamanhos !== quantidadeTotal
      ) {
        return helpers.error('any.custom')
      }

      return value
    }),
  comoNosConheceu: Joi.string().required()
})

const Form = () => {
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(false)
  const [cepError, setCepError] = useState(false)
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [registerFailed, setRegisterFailed] = useState(false)
  const [errorDuplicateEntry, setErrorDuplicateEntry] = useState(false)
  const [estadoValue, setEstadoValue] = useState<string | null | undefined>(
    null
  )
  const {
    register,
    clearErrors,
    control,
    handleSubmit,
    watch,
    setValue,
    setFocus,
    reset,
    setError,
    formState: { errors, ...formStateProps },
    ...props
  } = useForm<IFormInputs>({
    resolver: joiResolver(schema),
    defaultValues: {
      tamanhos: [
        { key: 'pp', label: 'PP', checked: false },
        { key: 'p', label: 'P', checked: false },
        { key: 'm', label: 'M', checked: false },
        { key: 'g', label: 'G', checked: false },
        { key: 'gg', label: 'GG', checked: false },
        { key: 'ps', label: 'PLUS SIZE', checked: false }
      ]
    }
  })
  const { fields } = useFieldArray<IFormInputs>({
    control,
    name: 'tamanhos'
  })

  const cep = watch('cep')
  const endereco = watch('endereco')
  const quantidadeTotal = watch('quantidadeTotal')
  const tamanhosTotal = watch([
    'tamanhos.0.quantidade',
    'tamanhos.1.quantidade',
    'tamanhos.2.quantidade',
    'tamanhos.3.quantidade',
    'tamanhos.4.quantidade',
    'tamanhos.5.quantidade'
  ])
  const tamanhosChecked = watch([
    'tamanhos.0.checked',
    'tamanhos.1.checked',
    'tamanhos.2.checked',
    'tamanhos.3.checked',
    'tamanhos.4.checked',
    'tamanhos.5.checked'
  ])

  const [createSupplier] = useMutation(CREATE_SUPPLIER)

  useLayoutEffect(() => {
    if (!loading && cepError && !endereco?.length) {
      setFocus('endereco')
    }
  }, [loading, cepError, endereco])

  useLayoutEffect(() => {
    if (errorDuplicateEntry && !saving) {
      setFocus('whatsapp')
    }
  }, [errorDuplicateEntry, saving])

  useEffect(() => {
    fetch(API_ESTADOS)
      .then(async (data) => {
        const estadosJSON = await data.json()
        estadosJSON.map((estado: Estado) =>
          estados.push(`${estado.nome} - ${estado.sigla}`)
        )
      })
      .catch(() => console.log('Não foi possível carregar a lista de Estados'))
      .finally(() => {
        estados.sort((estadoA, estadoB) =>
          estadoA > estadoB ? 1 : estadoA < estadoB ? -1 : 0
        )
      })
  }, [])

  useEffect(() => {
    if (new RegExp(pattern).test(cep)) {
      setLoading(true)
      fetch(API_CEP(cep))
        .then(async (data) => {
          const res = await data.json()

          if (!res.erro) {
            const logradouro = res.logradouro
            const bairro = res.bairro
            const localidade = res.localidade
            const uf = estados.find((estado) => estado.includes(res.uf))!

            setValue('endereco', logradouro, { shouldValidate: !!logradouro })
            setValue('bairro', bairro, { shouldValidate: !!bairro })
            setValue('cidade', localidade, { shouldValidate: !!localidade })
            setValue('estado', uf, { shouldValidate: !!uf })
            setEstadoValue(uf)
            setCepError(false)
            setLoading(false)
            setFocus('numero')
          } else {
            setValue('endereco', '')
            setValue('bairro', '')
            setValue('cidade', '')
            setValue('estado', '')
            setEstadoValue(null)
            setCepError(true)
          }
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [cep, setValue])

  useEffect(() => {
    const soma = tamanhosTotal.reduce(
      (a, b) => Number(a || 0) + Number(b || 0),
      0
    )

    const hasChecked = tamanhosChecked.filter((a) => a === true).length

    if (!!quantidadeTotal && !!hasChecked) {
      if (Number(soma) !== Number(quantidadeTotal) && !errors.tamanhos) {
        setError('tamanhos', { type: 'any.custom' })
      } else if (Number(soma) === Number(quantidadeTotal) && errors.tamanhos) {
        clearErrors('tamanhos')
      }
    }
  }, [
    quantidadeTotal,
    tamanhosTotal.reduce((a, b) => Number(a || 0) + Number(b || 0), 0),
    tamanhosChecked.filter((a) => a).length
  ])

  const onSubmit = async (data: IFormInputs) => {
    setSaving(true)
    await createSupplier({
      variables: {
        supplierInput: {
          nome: data.nome,
          sobrenome: data.sobrenome,
          whatsapp: data.whatsapp,
          cep: data.cep,
          endereco: data.endereco,
          numero: data.numero,
          complemento: data.complemento || null,
          bairro: data.bairro,
          cidade: data.cidade,
          estado: data.estado,
          quantidadeTotal: data.quantidadeTotal,
          estacao: data.estacao,
          PP: data.tamanhos.find((tam) => tam.key === 'pp')?.quantidade || 0,
          P: data.tamanhos.find((tam) => tam.key === 'p')?.quantidade || 0,
          M: data.tamanhos.find((tam) => tam.key === 'm')?.quantidade || 0,
          G: data.tamanhos.find((tam) => tam.key === 'g')?.quantidade || 0,
          GG: data.tamanhos.find((tam) => tam.key === 'gg')?.quantidade || 0,
          PS: data.tamanhos.find((tam) => tam.key === 'ps')?.quantidade || 0,
          comoNosConheceu: data.comoNosConheceu
        }
      }
    })
      .then(() => {
        setRegisterSuccess(true)
      })
      .catch((e: ApolloError) => {
        if (e.message === 'Duplicate entry') {
          setErrorDuplicateEntry(true)
        } else {
          setRegisterFailed(true)
        }
      })
      .finally(() => setSaving(false))
  }

  const handleTryAgain = async () => {
    reset()
    setEstadoValue(null)
    setRegisterFailed(false)
  }

  return registerSuccess ? (
    <Fade in={registerSuccess} timeout={300}>
      <S.HeadingWrapper>
        <RegisterSuccess />
      </S.HeadingWrapper>
    </Fade>
  ) : registerFailed ? (
    <Fade in={registerFailed} timeout={300}>
      <RegisterFailed
        handleTryAgain={async () => {
          await handleTryAgain().then(() => setFocus('nome'))
        }}
      />
    </Fade>
  ) : (
    <>
      <S.SubHeading>LEGAL NÉ? 😍</S.SubHeading>
      <S.Heading>
        BORA <span>DESAPEGAR</span>? 🚀
      </S.Heading>
      <FormProvider
        control={control}
        register={register}
        handleSubmit={handleSubmit}
        watch={watch}
        setValue={setValue}
        setError={setError}
        clearErrors={clearErrors}
        setFocus={setFocus}
        reset={reset}
        formState={{
          errors: errors,
          ...formStateProps
        }}
        {...props}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Wrapper>
            <S.HeadingWrapper>
              <S.HeadingTitle>Cadastro</S.HeadingTitle>
              <S.HeadingSubtitle>
                Preencha o formulário abaixo e logo entraremos em contato com
                você
              </S.HeadingSubtitle>
            </S.HeadingWrapper>

            <S.SectionWrapper>
              <S.SectionTitle color={'dark'}>
                Informações Pessoais
              </S.SectionTitle>
              <S.InputWrapper>
                <Grid container spacing={2}>
                  <Grid item xl={4} lg={4} md={4} sm={5} xs={12}>
                    <TextField
                      disabled={saving}
                      placeholder={'Nome'}
                      error={errors.nome?.message ? true : undefined}
                      {...register('nome')}
                    />
                    {!!errors.nome?.message && <HelperText type={'error'} />}
                  </Grid>
                  <Grid item xl={8} lg={8} md={8} sm={7} xs={12}>
                    <TextField
                      disabled={saving}
                      placeholder={'Sobrenome'}
                      error={errors.sobrenome?.message ? true : undefined}
                      {...register('sobrenome')}
                    />
                    {!!errors.sobrenome?.message && (
                      <HelperText type={'error'} />
                    )}
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={5} xs={12}>
                    <TextField
                      disabled={saving}
                      placeholder={'Whatsapp'}
                      type={'phone'}
                      error={errors.whatsapp?.message ? true : undefined}
                      {...register('whatsapp')}
                      onChange={async (e: any) => {
                        setErrorDuplicateEntry(false)
                        return register('whatsapp').onChange(e)
                      }}
                    />
                    {(!!errors.whatsapp?.message || !!errorDuplicateEntry) && (
                      <HelperText
                        type={'error'}
                        message={
                          errorDuplicateEntry
                            ? 'Número já cadastrado'
                            : errors?.whatsapp?.type === 'string.pattern.base'
                            ? 'Número inválido'
                            : 'Campo obrigatório'
                        }
                      />
                    )}
                  </Grid>
                </Grid>
              </S.InputWrapper>
              <S.InputWrapper>
                <Grid container spacing={2}>
                  <Grid
                    item
                    container
                    xl={3}
                    lg={3}
                    md={3}
                    sm={4}
                    xs={12}
                    style={{ position: 'relative' }}
                  >
                    <TextField
                      disabled={loading || saving}
                      placeholder={'CEP'}
                      type={'cep'}
                      error={errors.cep?.message ? true : undefined}
                      {...register('cep')}
                    />
                    {loading && (
                      <S.CircularProgress variant={'indeterminate'} size={20} />
                    )}
                    {!!errors.cep?.message && (
                      <HelperText
                        type={'error'}
                        message={
                          errors.cep.type === 'string.pattern.base'
                            ? 'CEP inválido'
                            : 'Campo obrigatório'
                        }
                      />
                    )}
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      disabled={loading || saving}
                      placeholder={loading ? 'Carregando' : 'Endereço'}
                      error={errors.endereco?.message ? true : undefined}
                      {...register('endereco')}
                    />
                    {!!errors.endereco?.message && (
                      <HelperText type={'error'} />
                    )}
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <TextField
                      disabled={saving}
                      type={'number'}
                      placeholder={'Número'}
                      error={errors.numero?.message ? true : undefined}
                      {...register('numero')}
                    />
                    {!!errors.numero && <HelperText type={'error'} />}
                  </Grid>
                  <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <TextField
                      disabled={saving}
                      required={false}
                      placeholder={'Complemento'}
                      {...register('complemento')}
                    />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <TextField
                      disabled={loading || saving}
                      placeholder={loading ? 'Carregando' : 'Bairro'}
                      error={errors.bairro?.message ? true : undefined}
                      {...register('bairro')}
                    />
                    {!!errors.bairro?.message && <HelperText type={'error'} />}
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <TextField
                      disabled={loading || saving}
                      placeholder={loading ? 'Carregando' : 'Cidade'}
                      error={errors.cidade?.message ? true : undefined}
                      {...register('cidade')}
                    />
                    {!!errors.cidade?.message && <HelperText type={'error'} />}
                  </Grid>
                  <Grid item xl={10} lg={10} md={10} sm={10} xs={12}>
                    <Controller
                      name={'estado'}
                      control={control}
                      render={({ field }) => (
                        <Autocomplete
                          {...field}
                          openOnFocus={false}
                          disabled={loading || saving}
                          options={estados}
                          ref={register('estado').ref}
                          renderInput={(props) => (
                            <AutocompleteInput
                              {...props}
                              disabled={loading || saving}
                              placeholder={loading ? 'Carregando' : 'Estado'}
                              error={errors.estado?.message ? true : undefined}
                              ref={props.InputProps.ref}
                              onMouseDownCapture={(e) => e.stopPropagation()}
                            />
                          )}
                          ListboxProps={{
                            style: {
                              fontSize: '1.4rem',
                              borderRadius: '2rem'
                            }
                          }}
                          style={{
                            cursor: loading || saving ? 'not-allowed' : 'auto'
                          }}
                          value={estadoValue}
                          onChange={(_, newValue) => {
                            field.onChange(newValue)
                            setEstadoValue(newValue)
                          }}
                          getOptionSelected={(opt, val) => opt === val}
                        />
                      )}
                    />

                    {!!errors.estado?.message && <HelperText type={'error'} />}
                  </Grid>
                </Grid>
              </S.InputWrapper>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <S.SectionTitle color={'light'}>Desapegos</S.SectionTitle>
              <S.InputWrapper>
                <Grid container spacing={2}>
                  <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <TextField
                      disabled={saving}
                      placeholder={'Quantidade total'}
                      type={'number'}
                      min={minQuantidade}
                      error={errors.quantidadeTotal?.message ? true : undefined}
                      {...register('quantidadeTotal')}
                    />
                    {(!!errors.quantidadeTotal?.message ||
                      (!!quantidadeTotal &&
                        quantidadeTotal < minQuantidade)) && (
                      <HelperText
                        type={'error'}
                        message={
                          errors.quantidadeTotal?.type === 'number.min' ||
                          quantidadeTotal < minQuantidade
                            ? `A quantidade mínima permitida é de ${minQuantidade} peças`
                            : undefined
                        }
                      />
                    )}
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <S.Caption>Estação Predominante</S.Caption>
                  </Grid>
                  <Grid item container>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                      <Controller
                        name={'estacao'}
                        control={control}
                        render={({ field }) => (
                          <RadioGroup
                            {...field}
                            disabled={saving}
                            name={'estacao'}
                            direction={'column'}
                            error={errors.estacao?.message ? 1 : 0}
                            labels={[
                              {
                                label: 'Verão',
                                value: 'verao'
                              },
                              {
                                label: 'Inverno',
                                value: 'inverno'
                              },
                              {
                                label: 'Ambas',
                                value: 'ambas'
                              }
                            ]}
                          />
                        )}
                      />
                      {!!errors.estacao?.message && (
                        <HelperText
                          type={'error'}
                          message={'Seleção obrigatória'}
                        />
                      )}
                    </Grid>
                  </Grid>
                  <Fade
                    in={!!quantidadeTotal && quantidadeTotal >= minQuantidade}
                    timeout={300}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Grid item container>
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <S.Caption>Tamanhos</S.Caption>
                      </Grid>
                      <S.Tamanhos
                        item
                        container
                        spacing={5}
                        error={errors.tamanhos?.type ? 1 : 0}
                      >
                        {fields.map((f, index) => {
                          return (
                            <Grid
                              item
                              xl={4}
                              lg={4}
                              md={4}
                              sm={6}
                              xs={6}
                              key={f.id}
                            >
                              <FormControlLabelCheckbox
                                label={f.label}
                                index={index}
                                {...register(`tamanhos.${index}.quantidade`)}
                                disabled={saving}
                              />
                            </Grid>
                          )
                        })}
                      </S.Tamanhos>
                      {!!errors.tamanhos?.type && (
                        <HelperText
                          type={'error'}
                          message={
                            errors.tamanhos.type === 'any.custom'
                              ? 'A soma total dos tamanhos é diferente da quantidade total informada'
                              : 'Ao menos um tamanho deve ser informado'
                          }
                        />
                      )}
                    </Grid>
                  </Fade>
                </Grid>
              </S.InputWrapper>
            </S.SectionWrapper>

            <S.SectionWrapper>
              <S.SectionTitle color={'main'}>Como nos conheceu</S.SectionTitle>
              <S.InputWrapper>
                <Grid container>
                  <Controller
                    name={'comoNosConheceu'}
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        {...field}
                        disabled={saving}
                        error={errors.comoNosConheceu?.message ? 1 : 0}
                        labels={[
                          {
                            label: 'Instagram',
                            value: 'instagram'
                          },
                          {
                            label: 'Whatsapp',
                            value: 'whatsapp'
                          },
                          {
                            label: 'Indicação',
                            value: 'indicacao'
                          },
                          {
                            label: 'Outro',
                            whenChecked: true
                          }
                        ]}
                      />
                    )}
                  />
                  {!!errors.comoNosConheceu?.message && (
                    <HelperText
                      type={'error'}
                      message={'Seleção obrigatória'}
                    />
                  )}
                </Grid>
              </S.InputWrapper>
            </S.SectionWrapper>
            <S.SectionWrapper>
              <div
                style={{
                  cursor: saving ? 'not-allowed' : 'auto',
                  width: 'fit-content'
                }}
              >
                <Button
                  disabled={saving}
                  type={'submit'}
                  variant={'contained'}
                  size={'large'}
                  color={'secondary'}
                >
                  Finalizar cadastro
                </Button>
              </div>
            </S.SectionWrapper>
          </S.Wrapper>
        </form>
      </FormProvider>
    </>
  )
}
export default Form
