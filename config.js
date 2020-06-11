{
  "spectrum_settings": {
    "nbins": 100,
    "normalized": "GW",
    "emin": 1.0,
    "emax": 9.0
  },
  
  "data_sources": {
     "u235": "huber_u235.txt",
     "u238": "hayes_u238.txt",
     "pu239": "huber_pu239.txt",
     "pu241": "huber_pu241.txt"
   },
   
   "reactor_data": {
     "type": "manual",
     "power": 1.00,
     "fraction_u235":  1.0,
     "fraction_u238":  1.0,
     "fraction_pu239": 1.0,
     "fraction_pu241": 1.0
   },
   
   "output_settings": {
     "format": "text",
     "output_name": "spectrum.text"
   }
}
