export default function Page({ params }) {
    return (
        <>
            <h1 className="text-clayn-500">Hello!! User :  {params.slug}</h1>
        </>
    )
}