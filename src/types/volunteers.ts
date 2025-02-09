export interface Volunteer {
  id: string
  name: string
  email: string
  avatar: string
  role: string
  status: 'active' | 'inactive'
  joinedDate: string
  hoursContributed: number
  mealsServed: number
  availability: string[]
  skills: string[]
}