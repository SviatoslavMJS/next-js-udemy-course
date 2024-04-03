import Link from "next/link";

const MealsPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className="bg-green-500 text-white">Meals Page</h1>
      <Link className="text-red" href="/meals/share" >Share</Link>
      <Link href="/meals/meal-1" >Meal 1</Link>
    </div>
  );
};

export default MealsPage;
