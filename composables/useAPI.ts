export const useAPI = () => {
  const config = useAppConfig()
  return config.API_URL
}
