{
    navigation.map((item) => (
        <Link
            key={item.name}
            to={`${item.href}`}
            className={
                classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium'
                )}
            aria-current={item.current ? 'page' : undefined}
        >{item.name}</Link>
    ))
}
{
    user && <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' onClick={handlesignOut}>Sign Out</button>
}