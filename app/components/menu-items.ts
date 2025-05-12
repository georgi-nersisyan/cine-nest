export const menuItems:MenuItem[] = [
    {
        id:1,
        title:'Home',
        slug:'/'
    },
    {
        id:2,
        title:'Movies',
        slug:'/movies',
    },
    {
        id:3,
        title:'About us',
        slug:'/about'
    },
    {
        id:4,
        title:'Contact us',
        slug:'/contact'
    },
]

export interface MenuItem {
    id:number,
    title:string,
    slug:string,
    submenu?:MenuItem[]
}