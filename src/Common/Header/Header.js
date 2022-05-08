import { useAuthState } from 'react-firebase-hooks/auth';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import auth from '../../firebase.init';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Add Item', href: '/additem', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const handlesignOut = () => {
    signOut(auth)
}

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex">
                                    <h2 className='text-3xl text-slate-100 font-semibold'><Link to='/'>BIKE PARK</Link></h2>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
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
                                        ))}
                                        {
                                            user && <>
                                                <Link to='/myitems' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>My Items</Link>
                                                <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' onClick={handlesignOut}>Sign Out</button>
                                            </>
                                        }
                                        {
                                            !user && <>
                                                <Link to='/login' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Login</Link>
                                                <Link to='/register' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Register</Link>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={`${item.href}`}
                                    className={
                                        classNames(
                                            item.current ? 'bg-gray-900 block text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'px-3 py-2 rounded-md text-sm font-medium block'
                                        )}
                                    aria-current={item.current ? 'page' : undefined}
                                >{item.name}</Link>
                            ))}
                            {
                                user && <>
                                    <Link to='/myitems' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-left block w-full'>My Items</Link>
                                    <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-left w-full' onClick={handlesignOut}>Sign Out</button>
                                </>
                            }
                            {
                                !user && <>
                                    <Link to='/login' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full block'>Login</Link>
                                    <Link to='/register' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-full block'>Register</Link>
                                </>
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header;
