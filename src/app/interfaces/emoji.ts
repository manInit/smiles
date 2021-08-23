export interface Emoji {
  name: string
  url: string
  isLove: boolean
  isDeleted: boolean
  [key: string]: string | boolean
}
