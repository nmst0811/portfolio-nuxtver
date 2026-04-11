export interface Category {
  name: string
  slug: string
}

export interface Work {
  id: string
  title: string
  category: Category
  period: string
  time?: string
  description: string
  detail?: string
  repo?: string
  images: {
    url: string
  }[]
  href: string
}

export interface MicroCMSResponse<T> {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}
