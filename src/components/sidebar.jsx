import Input from "./input";

const Category = [
    {id: 1, label:'All', di: 'all'},
    {id: 2, label:'Sneakers', di: 'sneakers'},
    {id: 3, label:'Flats', di: 'flats'},
    {id: 4, label:'Sandals', di: 'sandals'},
    {id: 5, label:'Heels', di: 'heels'},
]

const Price = [
    {id:1, label:'All', di: 'all'},
    {id:2, label:'$0 - $50', di: 'sec'},
    {id:3, label:'&50 - $100', di: 'third'},
    {id:4, label:'$100 - $150', di: 'forth'},
    {id:5, label:'Over $150', di: 'forth'},
]

const Color = [
  { id: 1, name: "All", hex: "bg-gradient-to-r from-green-400 to-blue-500" },
  { id: 2, name: "Black", hex: "bg-[#000]" },
  { id: 3, name: "Blue", hex: "bg-[#1d4ed8]" },
  { id: 4, name: "Red", hex: "bg-[#f43f5e]" },
  { id: 5, name: "White", hex: "bg-[#fff] border-2 border-slate-500" },
];

const Sidebar = ({handleChange}) => {
     
  return (
    <div className="hidden lg:flex xl:flex w-[25%] h-[100%] items-center flex-col gap-5 p-4 border-r sticky top-0 left-0">
      <div>
        <h2 className="py-2 font-semibold text-xl">Categories</h2>
        <Input 
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
        />
        <Input
         handleChange={handleChange}
         value="falts"
         title="Falts"
         name="test"
         />
        <h2 className="py-2 font-semibold text-xl">Color</h2>
        <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
        />
      </div>
      <div>
        <h2 className="py-2 font-semibold text-xl">Price</h2>
        <Input 
        handleChange={handleChange}
        value={50}
        title="$0 - 50"
        name="test2 "
        />
        <Input
         handleChange={handleChange}
         value={100}
         title="$50 - 100"
         name="test2"
         />
        <h2 className="py-2 font-semibold text-xl">Color</h2>
        <Input
        handleChange={handleChange}
        value={150}
        title="$100 - 150"
        name="test2"
        />
        <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test2"
        />
      </div>
      <div>
        <h2 className="py-2 font-semibold text-xl">Colors</h2>
        <Input 
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
        />
        <Input
         handleChange={handleChange}
         value="blue"
         title="Blue"
         name="test1"
         color="blue"
         />
        <h2 className="py-2 font-semibold text-xl">Color</h2>
        <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
        />
        <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="Green"
        />
        <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="test1"
        color="White"
        />
      </div>
    </div>
  );
}

export default Sidebar