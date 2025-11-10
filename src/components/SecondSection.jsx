import './SecondSection.css'


export default function SecondSection() {
  return (
      <div className='second-section '>

         <div className='combine-container'>
            <div className='first-section'></div>
         </div>

         <div className="content-wrapper font-netflix text-headline1 sm:text-headline1 md:text-headline1 lg:text-title2 font-normal">
            <h5 className='font-bold'>Trending Now</h5>

            <div className = 'flex font-netflix p-0 m-0 gap-[25px] sm:gap-[20px] md:gap-[30px] lg:gap-[40px]'>
                  <div className="card-container relative hover:cursor-pointer hover:scale-105 transition-transform duration-500">
                     <div className="image-container w-[120px] h-[160px] sm:w-[112px] md:w-[150px] lg:w-[224px] sm:h-[152px] md:h-[220px] lg:h-[265px] rounded-[8px] overflow-hidden">
                        <img
                           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                           loading="lazy"
                           alt=""
                           className="object-cover h-full w-full"
                        />
                     </div>
                     <div className='absolute top-[80px] lg:top-[120px] right-[84%] md:top-[120px] sm:top-[60px]'>
                        <h3 className="outlined-text text-[50px] font-bold text-[#000000]  sm:text-[64px] md:text-[64px] lg:text-[100px]">
                           1
                        </h3>
                     </div>
                  </div>

            </div>

         </div>

         
      </div>
  )
}


  {/* <Card component="li" sx={{ 
                        minWidth: { xs: 112, sm: 150, md: 180 },
                        minHeight: { xs: 152, sm: 220, md: 252 },
                     }}>
                     <CardCover>
                        <img
                           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                           loading="lazy"
                           alt=""
                        />
                     </CardCover>
                     <CardContent>
                        <Typography
                           level="body-lg"
                           textColor="#000000"
                           className="outlined-text font-netflix"
                           sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, fontSize:{ xs: '64px', sm: '64px', md: '100px' }  }}
                        >
                           2
                        </Typography>
                     </CardContent>
                  </Card>

                   <Card component="li" sx={{ 
                        minWidth: { xs: 112, sm: 150, md: 180 },
                        minHeight: { xs: 152, sm: 220, md: 252 },
                     }}>
                     <CardCover>
                        <img
                           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                           loading="lazy"
                           alt=""
                        />
                     </CardCover>
                     <CardContent>
                        <Typography
                           level="body-lg"
                           textColor="#000000"
                           className="outlined-text font-netflix"
                           sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, fontSize:{ xs: '64px', sm: '64px', md: '100px' }  }}
                        >
                           3
                        </Typography>
                     </CardContent>
                  </Card>

                  <Card component="li" sx={{ 
                     minWidth: { xs: 112, sm: 150, md: 180 },
                     minHeight: { xs: 152, sm: 220, md: 252 },
                  }}>
                     <CardCover>
                        <img
                           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                           loading="lazy"
                           alt=""
                        />
                     </CardCover>
                     <CardContent>
                        <Typography
                           level="body-lg"
                           textColor="#000000"
                           className="outlined-text font-netflix"
                           sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, fontSize:{ xs: '64px', sm: '64px', md: '100px' }  }}
                        >
                           4
                        </Typography>
                     </CardContent>
                  </Card>

                  <Card component="li" sx={{ 
                     minWidth: { xs: 112, sm: 150, md: 180 },
                     minHeight: { xs: 152, sm: 220, md: 252 },
                  }}>
                     <CardCover>
                        <img
                           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                           loading="lazy"
                           alt=""
                        />
                     </CardCover>
                     <CardContent>
                        <Typography
                           level="body-lg"
                           textColor="#000000"
                           className="outlined-text font-netflix"
                           sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, fontSize:{ xs: '64px', sm: '64px', md: '100px' }  }}
                        >
                           5
                        </Typography>
                     </CardContent>
                  </Card>

                  <Card component="li" sx={{ 
                     minWidth: { xs: 112, sm: 150, md: 180 },
                     minHeight: { xs: 152, sm: 220, md: 252 },
                  }}>
                     <CardCover>
                        <img
                           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                           loading="lazy"
                           alt=""
                        />
                     </CardCover>
                     <CardContent>
                        <Typography
                           level="body-lg"
                           textColor="#000000"
                           className="outlined-text font-netflix"
                           sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, fontSize:{ xs: '64px', sm: '64px', md: '100px' }  }}
                        >
                           6
                        </Typography>
                     </CardContent>
                  </Card>

                  <Card component="li" sx={{ 
                     minWidth: { xs: 112, sm: 150, md: 180 },
                     minHeight: { xs: 152, sm: 220, md: 252 },
                  }}>
                     <CardCover>
                        <img
                           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                           loading="lazy"
                           alt=""
                        />
                     </CardCover>
                     <CardContent>
                        <Typography
                           level="body-lg"
                           textColor="#000000"
                           className="outlined-text font-netflix"
                           sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, fontSize:{ xs: '64px', sm: '64px', md: '100px' }  }}
                        >
                           7
                        </Typography>
                     </CardContent>
                  </Card>

                  <Card component="li" sx={{ 
                     minWidth: { xs: 112, sm: 150, md: 180 },
                     minHeight: { xs: 152, sm: 220, md: 252 },
                  }}>
                     <CardCover>
                        <img
                           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                           loading="lazy"
                           alt=""
                        />
                     </CardCover>
                     <CardContent>
                        <Typography
                           level="body-lg"
                           textColor="#000000"
                           className="outlined-text font-netflix"
                           sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, fontSize:{ xs: '64px', sm: '64px', md: '100px' }  }}
                        >
                           8
                        </Typography>
                     </CardContent>
                  </Card>

                  <Card component="li" sx={{ 
                     minWidth: { xs: 112, sm: 150, md: 180 },
                     minHeight: { xs: 152, sm: 220, md: 252 },
                  }}>
                     <CardCover>
                        <img
                           src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                           srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                           loading="lazy"
                           alt=""
                        />
                     </CardCover>
                     <CardContent>
                        <Typography
                           level="body-lg"
                           textColor="#000000"
                           className="outlined-text font-netflix"
                           sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 }, fontSize:{ xs: '64px', sm: '64px', md: '100px' }  }}
                        >
                           9
                        </Typography>
                     </CardContent>
                  </Card>

                  <Card component="li" sx={{ 
                     minWidth: { xs: 112, sm: 150, md: 180 },
                     minHeight: { xs: 152, sm: 220, md: 252 },
                  }}>
                     <CardCover>
                        <video
                           autoPlay
                           loop
                           muted
                           poster="https://assets.codepen.io/6093409/river.jpg"
                        >
                           <source
                           src="https://assets.codepen.io/6093409/river.mp4"
                           type="video/mp4"
                           />
                        </video>
                     </CardCover>
                     <CardContent>
                        <Typography
                           level="body-lg"
                           textColor="#000000"
                           className="outlined-text font-netflix"
                           sx={{ mt: { xs: 12, sm: 18 }, fontSize:{ xs: '64px', sm: '64px', md: '100px' } }}
                        >
                           1
                        </Typography>
                     </CardContent>
                  </Card> */}