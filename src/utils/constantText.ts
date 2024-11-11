import { Icons, Images } from "../assets";

export const constantText={
INSTAGRAM_TITLE:'Instagram Handle URL / Youtube URL',
INSTA_PLACEHOLDER:'www.instagram.com/creator',
HOSTEL_NAME:'Hostel Name',
EMAIL:'Email',
DATE_OF_ARRIVAL:'Date of Arrival',
TRAVELING:'Traveling schedule',
SERVICE_OFFER:'Service Offer ',
SCREENSHOT:'Add Instagram / Youtube Page Screenshot',
SUBMIT_OFFER:'Submit Offer',
COMPLETE:'70% Complete',
INCLUDE:'What’s Included',
FREE:'Free',
GOLD:'Gold'

}
export interface DropdownItem {
    id:number,
    label: string;
    value: string;
  }
export  const hostelArray:DropdownItem[] =[
    {
      id:1,
      label:'Hostel 1',
      value:'Hostel 1.'
  
    },
  
  {
    id:2,
    label:'Hostel 2',
    value :'Hostel 2'
  
  },
  {
    id:3,
    label:'Hostel 3',
    value:'Hostel 3'
  },

  
  
  ]

  export  const serviceArray:DropdownItem[] =[
    {
      id:1,
      label:'Service 1',
      value:'Service 1.'
  
    },
  
  {
    id:2,
    label:'Service 2',
    value :'Service 2'
  
  },
  {
    id:3,
    label:'Service 3',
    value:'Service 3'
  },

  
  
  ]

  export const data=[
    {
      id:1,
      name:'Free Super Like',
      image:Icons.right_click
    },
    {
      id:2,
      name:'Free Super Like',
      image:Icons.right_click
    },
    {
      id:3,
      name:'Free Super Like',
      image:Icons.right_click
    },
  ]