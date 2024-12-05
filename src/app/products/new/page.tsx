'use client'
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';

function Page(): JSX.Element {
  const [ productCode, setProductCode ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const router = useRouter();

  // Handle form submission
  const handleForm = async ( event: { preventDefault: () => void } ) => {
    event.preventDefault();

    // Attempt to sign in with provided email and password
    // const { result, error } = await signIn( email, password );

    // if ( error ) {
    //   // Display and log any sign-in errors
    //   console.log( error );
    //   return;
    // }

    // // Sign in successful
    // console.log( result );

    // Redirect to the admin page
    // Typically you would want to redirect them to a protected page an add a check to see if they are admin or 
    // create a new page for admin
    router.push( "/admin" );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <form onSubmit={handleForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-6 text-black">NEW CAMERA</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Product Code
            </label>
            <input
              onChange={( e ) => setProductCode( e.target.value )}
              required
              type="text"
              name="product_code"
              id="product_code"
              placeholder="ABC DEF"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <CldUploadWidget signatureEndpoint="api/sign-image">
            {({ open }) => {
              return (
                <button onClick={() => open()}>
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>
    
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-black-500 text-dark font-semibold py-2 rounded"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;