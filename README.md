# reactorNuSpectrumGenerator
Allows user to specify different sources of reactor neutrino isotope fluxes and a list of weights, and generates an output neutrino spectrum. Still in beta...

# Usage:
python reactorNuSpectrumGeneratory.py < config file >

# Explanation of config file
## spectrum_settings
* nbins: number of bins in output spectrum
* normalized: either "GW" for neutrinos/sec using supplied power, "pdf" for normalization to integral of 1, or anything else for neutrinos/fission
* emin: minimum energy of output spectrum
* emax: maximum energy of output spectrum

## data_sources
* For each isotope, filename to use from fluxData folder. Format of data is energy, nu/fission. Comments start with a "#". If data does not cover requested (emin,emax) range, linear extrapolation is done using four closest data points.
  
## reactor_data
* type: "manual" currently, plan to put in example reactor data later
* power: power in GW
* fraction_u235: fraction of u235 in core, does not have to be normalized
* fraction_u238: fraction of u238 in core, does not have to be normalized
* fraction_pu239: fraction of pu239 in core, does not have to be normalized
* fraction_pu241: fraction of pu241 in core, does not have to be normalized

## output_settings:
* format: either "text" or "root"
* output_name: name of the output file, with appropriate extension
