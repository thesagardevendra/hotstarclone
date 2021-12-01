import React from 'react';

import Carousel from "react-elastic-carousel"
import Card from './Card';
import Category from './Category';
import Channel from './Channel';
import Genres from './Genres';

const CarouselCard = ({title,channel,genres,language,imagesrc,description,categoryimage,channelimg,Generscategory}) => {
   const breakPoints=[
      {width:1,itemsToShow:3},
      {width:550,itemsToShow:5},
      {width:768,itemsToShow:5},
      {width:1200,itemsToShow:8},
      {width:1500,itemsToShow:8},
      {width:1700,itemsToShow:9}
   ]
   const breakPoint=[
      {width:1,itemsToShow:3},
      {width:550,itemsToShow:5},
      {width:768,itemsToShow:4},
      {width:1200,itemsToShow:5},
      {width:1500,itemsToShow:6},
     
   ]
    return (
        <>
        <Carousel className="mt-1 lg:mb-10 mb-5"    >         
         <Card title={"Imlie"} channel={"StarPlus-"}  language={"Hindi-"}  genres={"Drama"} imagesrc={"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/895/830895-h"} description={"All hell breaks loose when the news of Imlie and Aditya's marriage comes out in the open. Will the family accept an illegitimate Imlie as their daught..."} />

         <Card  title={"Ghum Hai Kisikey Pyaar Meiin"} channel={"StarPlus- "} genres={"Romance"}  language={"Hindi- "} imagesrc={"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3006/1073006-h-a2616aa41c91"} description={"All hell breaks loose when the news of Imlie and Aditya's marriage comes out in the open. Will the family accept an illegitimate Imlie as their daught..."} />

         <Card title={"Yeh Rishta Kya Kehlata Hai"} channel={"StarPlus- "} genres={"Drama"}  language={"Hindi- "} imagesrc={"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4515/1074515-h-e3467da993bd"} description={"All hell breaks loose when the news of Imlie and Aditya's marriage comes out in the open. Will the family accept an illegitimate Imlie as their daught..."} />

         <Card  title={"Anupama"} channel={"StarPlus- "} genres={"Drama"}  language={"Hindi- "} imagesrc={"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8773/1028773-h-48170a73363e"} description={"Despite the many challenges thrown her way, Anupama begins a new chapter of her life post divorce. Head held always high, what's waiting for her next?..."} />

         <Card title={"Dil Bekaraar"}channel={"StarPlus- "} genres={"Drama"}  language={"Hindi- "} imagesrc={"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3933/1083933-h-61502ca0d21c"} description={"All hell breaks loose when the news of Imlie and Aditya's marriage comes out in the open. Will the family accept an illegitimate Imlie as their daught..."} />
        
        </Carousel> 
        <h1 className="text-white font-semibold tracking-wider text-md lg:text-2xl lg:m-8 lg:mx-16 lg:mb-5 ml-3">Latest & Trendings</h1>
        <Carousel className="mt-2 lg:mb-14 mb-6"  disableArrowsOnEnd={true} breakPoints={breakPoints} >      
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3934/1083934-v-3c2b3f7e195b"}/>
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a"}/>
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3202/1063202-v-3927e919d9b5"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8859/1068859-v-95343c662eaa"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4290/1074290-v-3d1de5d1c0e3"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3202/1063202-v-3927e919d9b5"} />
        </Carousel>
        <h1 className="text-white font-semibold tracking-wider text-md lg:text-2xl lg:m-8 lg:mx-16 lg:mb-5 mx-3">Popular Channels</h1>
        <Carousel className="mt-2 lg:mb-14 mb-6"  disableArrowsOnEnd={true} breakPoints={breakPoint} >      
        <Channel channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1132/661132-h"}/>
        <Channel channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6620/776620-h"}/>
        <Channel channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1137/661137-h"}/>
        <Channel channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1138/661138-h"}/>
        <Channel channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1122/661122-h"}/>
        <Channel channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1133/661133-h"}/>
        <Channel channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1105/661105-h"}/>
     
        </Carousel>
        <h1 className="text-white font-semibold tracking-wider  text-md lg:text-2xl lg:m-8 lg:mx-16 lg:mb-5 mx-3">Popular Show</h1>
        <Carousel className="mt-2 lg:mb-14 mb-6"  isRTL={true} disableArrowsOnEnd={true} breakPoints={breakPoints} >      
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3934/1083934-v-3c2b3f7e195b"}/>
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a"}/>
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3202/1063202-v-3927e919d9b5"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8859/1068859-v-95343c662eaa"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4290/1074290-v-3d1de5d1c0e3"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3202/1063202-v-3927e919d9b5"} />
        </Carousel>
        <h1 className="text-white font-semibold tracking-wider  text-md lg:text-2xl lg:m-8 lg:mx-16 lg:mb-5 mx-3">Movies Recommended For You</h1>
        <Carousel className="mt-2 lg:mb-14 mb-6"  disableArrowsOnEnd={true} breakPoints={breakPoints} >      
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3934/1083934-v-3c2b3f7e195b"}/>
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a"}/>
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3202/1063202-v-3927e919d9b5"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8859/1068859-v-95343c662eaa"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4290/1074290-v-3d1de5d1c0e3"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5472/1055472-v-4fac4c4e1978"} />
         <Category categoryimage={"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3202/1063202-v-3927e919d9b5"} />
        </Carousel>
        <h1 className="text-white font-semibold tracking-wider text-md lg:text-2xl lg:m-8 lg:mx-16 lg:mb-5 mx-3">Popular Genres</h1>
        <Carousel className="mt-2 lg:mb-14 mb-6"  disableArrowsOnEnd={true} breakPoints={breakPoint} >      
        <Genres channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2068/1062068-h-54b155e41999"} Generscategory={"romance"}/>
        <Genres channelimg={"https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/old_images/GENRE/926/926/926-h"} Generscategory={"drama"}/>
        <Genres channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/1616/1616/1616-h"} Generscategory={"family"}/>
        <Genres channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5784/165784-h"} Generscategory={"lifestyle"}/>
        <Genres channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/1830/1830/1830-h"} Generscategory={"reality"}/>
        <Genres channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/924/924/924-h"} Generscategory={"mythology"}/>
        <Genres channelimg={"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/1617/1617/1617-h"} Generscategory={"comedy"}/>
     
        </Carousel>
     </>   
    )
}

export default CarouselCard



 {/* <Card score={369} name={"tom & jerry"} imagesrc={"https://www.liveabout.com/thmb/oB1GlBVuGbhmL1MNQ9-JFOdOqbE=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tomandjerry-56a00b943df78cafda9fcac4.jpg"} strength={"funny"} btnstyle={"p-1 px-4 bg-gray-300 rounded text-white font-semibold capitalize"}/>

         <Card score={823} name={"scobby"} imagesrc={"https://www.liveabout.com/thmb/FjN53ZXkACORzwjFd4_RqyJ6Q2w=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/scoobydoo-58fe33693df78ca159d109eb.jpg"} strength={"doggiee"} btnstyle={"p-1 px-4 bg-red-500 rounded text-white font-semibold capitalize"}/>

         <Card score={340} name={"Simpson"}  imagesrc={"https://www.liveabout.com/thmb/kFwHxk9-gWIyAZz-RAn3Uyr1O3E=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/homer-simpson-58fe1e6e5f9b581d59a65d8d.jpg"}
         strength={"Swag"} btnstyle={"p-1 px-4 bg-yellow-400 rounded text-white font-semibold capitalize"}/>

         <Card score={586} name={"blaccky"} imagesrc={"https://www.liveabout.com/thmb/NrKS1OMihsaY_1J3eMs2ww9RSHA=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Felix_the_cat.svg-57c7a3293df78c71b688941b.png"} 
         strength={"quicker"} btnstyle={"p-1 px-4 bg-black rounded text-white font-semibold capitalize"}/>

         <Card score={688} name={"Bat man"}imagesrc={"https://www.liveabout.com/thmb/DOTGHnehGHaKYZqYJUA_hw_CAtA=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/batman-56a00b955f9b58eba4aea56d.jpg"}
         strength={"Stronger"} btnstyle={"p-1 px-4 bg-blue-500 rounded text-white font-semibold capitalize"}/>

         <Card score={984} name={"popeye"} imagesrc={"https://www.liveabout.com/thmb/7bh1CvzLxU4IdfLQ9O51wVajyl8=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/popeye-58fe2b3a3df78ca159bfdf8f.jpg"}
         strength={"muscular"} btnstyle={"p-1 px-4 bg-green-500 rounded text-white font-semibold capitalize"}/>

         <Card score={626} name={"big boss"} imagesrc={"https://www.liveabout.com/thmb/YLQ6xY25yFPqrpTis5pzwPJrHLo=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grinch-58fe2aa45f9b581d59aecd9b.jpg"}/>
    
         <Card score={354} name={"bugs bunny"} imagesrc={"https://www.liveabout.com/thmb/vRRrEUvOSJYy0vGWQPmbTgN48Ng=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bugs-bunny-58fe1c463df78ca159b5f7d6.jpg"}/>

         <Card score={565} name={"dennis"} imagesrc={"https://www.liveabout.com/thmb/_MVnbBJqhdNmCWx7Tpzf_LCzMTk=/1250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bart-simpson-58fe1f773df78ca159b60cc2.jpg"}/>


         <Card score={254} name={"mickey mouse"} imagesrc={"https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png"}/> */}