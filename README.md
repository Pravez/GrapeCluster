# Grape Cluster
## Presentation
Software implementation of a master-slave architecture of a Raspberry Pi. The goal is to produce a small-cost network testing platform, for teaching (networking labs) and studying technical problems difficult to reproduce correctly using virtual machines (such as a power shutdown). 

The Raspberries are grouped in stacks of a maximum of 6 Raspberries (7 for the stack that contains the unique master). They can communicate via an I2C bus, or via UDP over a cabled ethernet router. Each raspberry power can be shutdown, and sensors measure the temperature and power usage of each stack. A web interface and an HTTP API makes it possible to send the shutdown command and monitor the temperature, CPU usage of each Raspberry. It is also possible to connect on a Raspberry directly by SSH.

The slave Raspberries run one daemon written in C for each channels. The master Raspberry runs a daemon written in Python and the web interface. This repository also contains several helper scripts to reconstruct an ISO image (Raspbian for example) with necessary packages, write it to an SD card, and cross-compile the kernel with modules necessary for i2c.

More information on how the cluster is built physically can be found here: http://se.labri.fr/grape/

## Contributors
Cyril Bos
Paul Breton
Benjamin Dos Santos
Nicolas Hannoyer
Marion Lafon
Jason Pindat
Nicolas Vidal

Students of ENSEIRB-MATMECA, France.
