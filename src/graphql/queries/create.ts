import gql from 'graphql-tag'

export const CREATE_SUPPLIER = gql`
  mutation CREATE_SUPPLIER($supplierInput: SupplierInput) {
    payload: createSupplier(input: { data: $supplierInput }) {
      supplier {
        created_at
      }
    }
  }
`
