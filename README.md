# reactorNuSpectrumGenerator
Allows user to specify different sources of reactor neutrino isotope fluxes and a list of weights, and generates an output neutrino spectrum. Not fully tested.

# Usage:
python reactorNuSpectrumGeneratory.py <config file>

# Explanation of config file
## spectrum_settings
* nbins: number of bins in output spectrum
* normalized: either "GW" for neutrinos/sec using supplied power, "pdf" for normalization to integral of 1, or anything else for neutrinos/fission
* emin: minimum energy of output spectrum
* emax: maximum energy of output spectrum

## data_sources
* For each isotope, argument to use as a data source, expects file with name <arg>_<isotope>.txt in the fluxData folder with a format of energy,nu/fission. Comments start with a "#"

## reactor_data
* type: "manual" currently, plan to put in example reactor data later
* power: power in GW
* isotopes: list of isotopes
* fractions: fraction of each isotope, normalization done automatically

## output_settings:
* format: either "text" or "root"
* output_name: name of the output file, with appropriate extension
