import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../redux/features/general/generalSlice';

import { FaRegTrashAlt } from 'react-icons/fa';

import Layout from '../components/Layout';
import { toast } from 'react-toastify';

const Cart = () => {
  const dispatch = useDispatch();

  const {
    cart: { cartItems },
  } = useSelector((state) => state.general);
  const router = useRouter();

  console.log(cartItems);

  const removeItemHandler = (item) => {
    alert('esta seguro de remover?', item.name);
  };

  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const newProductOrder = { ...item, quantity };
    dispatch(updateCart(newProductOrder));
    toast.success('Product updated in the cart');
  };

  return (
    <Layout title={'Carrito de compras'}>
      <section className="pt-[var(--header-height)]">
        <h1 className="pt-4 text-myRose text-center text-6xl">
          Carrito de Compras
        </h1>
        {cartItems.length === 0 ? (
          <div>
            Cart is empty. <Link href="/">Go shopping</Link>
          </div>
        ) : (
          <div className="container m-auto mt-4 px-4">
            <div className="grid md:grid-cols-4 md:gap-5">
              <div className="overflow-x-auto md:col-span-3">
                <table className="min-w-full ">
                  <thead className="border-b bg-myCyan">
                    <tr>
                      <th className="p-5 text-left">Item</th>
                      <th className="p-5 text-right">Quantity</th>
                      <th className="p-5 text-right">Price</th>
                      <th className="p-5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr
                        key={item.id}
                        className={`border-b ${
                          index % 2 === 1 ? 'bg-blue-100' : ''
                        }`}
                      >
                        <td>
                          {/* <Link href={`/products/${item.slug}`}> */}
                          <Link href={'/'}>
                            <a className="flex items-center">
                              <Image
                                src={item.img}
                                alt={item.name}
                                width={50}
                                height={50}
                              />
                              &nbsp;
                              {item.name}
                            </a>
                          </Link>
                        </td>
                        <td className="p-5 text-right">
                          <select
                            value={item.quantity}
                            onChange={(e) =>
                              updateCartHandler(item, e.target.value)
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="p-5 text-right">${item.price}</td>
                        <td className="p-5 text-center">
                          <button onClick={() => removeItemHandler(item)}>
                            <FaRegTrashAlt className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card p-5">
                <ul>
                  <li>
                    <div className="pb-3 text-xl">
                      Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)})
                      : $
                      {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push('login?redirect=/shipping')}
                      className="primary-button w-full"
                    >
                      Check Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
