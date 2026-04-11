import { createClient } from 'microcms-js-sdk'
import type { Work, MicroCMSResponse } from '~/types/microcms'

export const useMicroCMS = () => {
  const config = useRuntimeConfig()
  
  const client = createClient({
    serviceDomain: config.public.microcmsServiceDomain || '',
    apiKey: config.public.microcmsApiKey || '',
  })

  const getWorks = async (params?: { limit?: number; filters?: string }) => {
    return await client.get<MicroCMSResponse<Work>>({
      endpoint: 'works',
      queries: params,
    })
  }

  const getWorkById = async (id: string) => {
    return await client.get<Work>({
      endpoint: 'works',
      contentId: id,
    })
  }

  return {
    getWorks,
    getWorkById,
  }
}
