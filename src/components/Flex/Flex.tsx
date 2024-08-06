

function Flex() {
    return (
        <div className='border-4 border-red-500 m-8 p-8 flex items-center justify-between rounded-2xl bg-fuchsia-200'>
            <div className='w-[250px]'>
                <h1 className='text-2xl'>Gambit</h1>
                <p>Mais poderoso que o Mago Supremo</p>

            </div>
            <div className='w-[500px]'>
                <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/9/40/575ead561d30e.jpg" alt="gambit" />
            </div>
        </div>
    )
}

export default Flex