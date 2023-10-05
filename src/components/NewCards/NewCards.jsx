import React, {useContext} from 'react';
import myContext from '../../context/data/myContext';
import {Link} from 'react-router-dom';

function NewCards() {
  const context = useContext(myContext);
  const {mode} = context;
  return (
    <div>
      <h3 className="text-center py-4 text-lg font-bold text-gray-700">
        TOO HOT TO BE MISSED
      </h3>
      <section>
        <div className=" container mx-auto px-5 md:py-5">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <Link to={'/allproducts'}>
                <div
                  className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)]  rounded-lg"
                  style={{
                    backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                    color: mode === 'dark' ? 'white' : '',
                  }}>
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/Trendy-Tshirt-at-flat-399-desktop-mid-size-banner-1695996107.jpg"
                    alt=""
                  />
                </div>
              </Link>
            </div>

            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <Link to={'/allproducts'}>
                <div
                  className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)]rounded-lg"
                  style={{
                    backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                    color: mode === 'dark' ? 'white' : '',
                  }}>
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-parachute-1695996214.jpg"
                    alt=""
                  />
                </div>
              </Link>
            </div>

            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <Link to={'/allproducts'}>
                <div
                  className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)]  rounded-lg"
                  style={{
                    backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                    color: mode === 'dark' ? 'white' : '',
                  }}>
                  <img
                    src="https://images.bewakoof.com/uploads/grid/app/desktop-mid-size-hygiene-revamp-PoloTees-1695996502.jpg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewCards;
