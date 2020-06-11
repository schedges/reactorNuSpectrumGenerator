{
  "spectrum_settings": {
    "nbins": 100,
    "normalized": "",
    "emin": 1.0,
    "emax": 9.0
  },
  
  "data_sources": {
     "u235": "huber",
     "u238": "hayes",
     "pu239": "huber",
     "pu241": "huber"
   },
   
   "reactor_data": {
     "type": "manual",
     "power": 1.00,
     "isotopes": ["u235","u238","pu239","pu241"],
     "fractions": [1.0,1.0,1.0,1.0]
   },
   
   "output_settings": {
     "format": "text",
     "output_name": "spectrum.txt"
   }
}