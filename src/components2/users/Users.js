let userAddress =[
    {id:1,name: 'andriy',age: 18, status:false,address:{city:'Lviv',street:'Lychakivska',number:25}},
    {id:2,name : 'max',age: 40, status:true,address : {city:'Lviv',street:'Lychakivska',number:11}},
    {id:3,name : 'vika',age : 18, status:false,address : {city:'Lviv',street:'Lychakivska',number:30}},
    {id:4,name : 'serhii',age : 30, status:true,address :{city:'Lviv',street:'Lychakivska',number:58}},
    {id:5,name : 'oleh',age : 31, status:true,address : {city:'Lviv',street:'Lychakivska',number:12}},
    {id:6,name : 'ivan',age : 25, status:false,address : {city:'Lviv',street:'Lychakivska',number:90}},
    {id:7,name : 'geka',age : 29, status:false,address : {city:'Lviv',street:'Lychakivska',number:99}},
    {id:8,name : 'kolja',age : 32, status: true,address : {city:'Lviv',street:'Lychakivska',number:45}},
    {id:9,name : 'mark',age : 53, status:false,address : {city:'Lviv',street:'Lychakivska',number:117}},
    {id:10,name : 'viktor',age : 20, status:true,address : {city:'Lviv',street:'Lychakivska',number:80}},
];
export default function Users (){
    return (
        <div>
            {
            userAddress.map(value => <user key={value.id} item={value}/>)
        }
        </div>
    )

};



