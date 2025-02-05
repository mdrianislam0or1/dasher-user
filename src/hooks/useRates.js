import { useMutation } from '@apollo/client'
import { INSERT_CLIENT_RATE_MUTATION, INSERT_DASHER_RATE_MUTATION } from '../services/GraphQl'

/**
 * @callback insertClientRate receive two params
 * @param package_code
 * @param client_rating
 * to use => insertDasherRate({"package_code": package_code, "client_rating": client_rating})}
 */
export function InsertClientRate() {
  const [insertClientRate, { loading, error, data }] = useMutation(INSERT_CLIENT_RATE_MUTATION)
  if (error) {
    console.error(error)
  }
  return { insertClientRate, loading, error, data }
}

/**
 * @callback insertDasherRate receive two params
 * @param package_code
 * @param dasher_rate
 * to use => insertDasherRate({"package_code": package_code, "dasher_rate": dasher_rate})}
 */
export function InsertDasherRate() {
  const [insertDasherRate, { loading, error, data }] = useMutation(INSERT_DASHER_RATE_MUTATION)
  if (error) {
    console.error(error)
  }
  return { insertDasherRate, loading, error, data }
}
