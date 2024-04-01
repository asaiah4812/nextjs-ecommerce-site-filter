import Link from "next/link"

const Links = [
    {id:1, name:'All Products'},
    {id:2, name:'Nike'},
    {id:3, name:'Adidas'},
    {id:4, name:'Puma'},
    {id:5, name:'Vans'},
]


const Recommended = () => {
  return (
    <div className="flex gap-2 flex-col">
        <h1 className="text-xl font-semibold">Recomment</h1>
        <div className="flex flex-wrap gap-3">
            {
                Links.map(link => (
                    <Link key={link.id} className="py-3 rounded hover:bg-slate-100 px-4 border" href={""}>{link.name}</Link>
                ))
            }
        </div>
    </div>
  )
}

export default Recommended