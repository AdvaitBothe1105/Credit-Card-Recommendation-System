import { Link } from 'react-router-dom'
import '../../App.css'
import card from '../../assets/card.png'


export const Carousel = () => {
  return (
    <div>
      <div className="sm:px-6 sm:py-32 pt-4 pb-0">
        <div className="relative isolate overflow-hidden bg-gray-900 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex  lg:px-36 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className=" max-w-md  lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Swipe, Earn, Repeat – Your Rewards Await!
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                Unlock exclusive cashback, travel perks, and exciting rewards with every transaction. Apply now and turn your spending into savings!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link to='/recommendations' className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                Get started

              </Link>
             
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 ml-52">
            <img
              alt="App screenshot"
              src={card}
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-[45rem] max-w-none rounded-3xl bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
