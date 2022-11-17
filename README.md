# Data Visualisation Report

URL: https://yaoyangdi.github.io/3179/visualisation2/

Data resource: https://www.abs.gov.au/census/find-census-data/community-profiles/2021/2GMEL

## Introduction

### Domain

2021 census residents profiles in Melbourne

### Why

The main goal is to explore areas of data related to residents such as age, population and nationality across the Greater Melbourne Area.

### Who

The visualisation serves people who are interested in the information related to residents living in the Greater Melbourne Area during the 2021 census.

## What

### Visualised Dataset

The data source originates from the Australian Bureau of Statistics, which is related to Melbourne community profile data in 2021 (“2021 Greater Melbourne, Census Community Profiles | Australian Bureau of Statistics,” n.d.). The original data source covers different topics including cultural diversity, education and training, population ect. (“Variables by Topic | Australian Bureau of Statistics,” 2021). The topics used in this visualisation were Population and Cultural diversity.

In terms of the creation process, letter writing, in-person visits, and online email information were used to contact households in different regions. ABS employed approximately 32,000 temporary field officers to identify and contact households and provide Census materials geographically dispersed throughout the country.(“How the Data Is Collected | Australian Bureau of Statistics,” 2022)

### Why and How

The idiom on the top left is a donut chart, which is used to graphically show to viewers the comparison of group population between male and female in Melbourne areas. Using the donut chart also shows viewers the total number of residents in the central part of the chart.

The idiom on the top right is a stacked bar chart. It is used for comparing the residential population of each age group. It also helps to compare each sub age group’s male to female ratio with the average one that is displayed on the donut chart.
The choropleth map (Figure 1) is used because it can clearly present the range grading of different population density of regions in Melbourne in the form of colour. Instead of using proportional symbol map or dot map as the idiom, it avoids the overall visualisation not being less readable.

![img](https://lh4.googleusercontent.com/dBDIs6l3GXSeuo6imJv8s8c6ort6LyXGxtd0gtEoSmQnqzIjun0_-QCfLF4vXt9-5TeSEqHv6HeXOyirj03SM2yVbSVrKI2K-bHq4mjzavXpVKuLUZtJkYmw_Tsr-pYWhFiOAJvxqZ-K-UoeqrDTTUvJ6W5j5CZZmHrtRKFEdcCSGwO8fGkwFkoRqTZPog)
<br>*figure 1: Choropleth map used for classification of different population density*

Bump chart is used under the Nationality section because the data we are exploring changes over time and as the viewer, the ranking would be their main concern. Using the bump chart will help viewers easily compare the ranking changes over the three census periods and A classified colour scheme can also help them track changes more effectively.

In order to get a more detailed picture of the changes in the population of these top 10 countries, we used the line chart (Figure 2) to track the changes every ten years since 1951. Interaction is integrated with the bump chart, so whenever the viewer clicks on the country flag in the bump chart, a corresponding line (Figure 3) will appear to demonstrate the trend in a more clear way.

**![img](https://lh5.googleusercontent.com/sR11UYubg6bwp42ojJtSOUzJFDuG7rIIL64la6V7btrPOz4O9EUlVs5hGBslMKVHg1zhQ2S5zP-AUdTuZCKiEAKf3DGZEFkc_Fwa_mqWOumTmur3-Tixp5-_DrbVXeMFBG_Ze_OWrzGxBCMgB12lpOqLoyUMbJxtTLiOoK8rvXy7yi6A00mcIH2U86zw3g)
<br>*figure 2: Line chart under Nationality section*

![img](https://lh4.googleusercontent.com/abl4aDvknIZ1d2x62seHzoEgJIhzF9PANfTM7EocOpa7VmlZpCpi139H3qlZybrg49vj0j5L1FuBIs8gHMb3-mn_pep9dN-wIzjvSg8H8zznnYlEY9aQh_gZecloeduqWVUh3kMQacaXbwdy8lLmTo8tma764YsR7y1uoJF6z88wdhfrVh5xzGMnVe3MoA)
<br>*figure 3: The corresponding line chart reacted to the bump chart's interaction*

## Design

### Layout

The layout of the visualisation was divided vertically into two sections, Population&Age and Nationality. For each section, there are two columns filled with either texts or charts.

### Colour

The colour hue is mainly used for two scenarios, the first scenario used colour hue to distinguish different categories. The second scenario uses colour hue and value in choropleth map. It is said that it is better to use light colours for low values and dark colours for high values (GmbH, 2018). Therefore, I use colour with more value to represent larger population density per region. 
We should avoid the stereotypical pink-blue combination and try a cold colour for men and a warmer colour for women (GmbH, 2018). Therefore, for the selection of colour for the gender, i considered navy blue for males and orange for females.
Colour consistency is applied when there is an interactive interaction between charts and therefore reduces a lot of unnecessary colour elements.

### Typography

In order to improve the readability, only two typefaces in the visualisation, one is Arial Sans serif for all headings(including titles and subtitles of idioms), and Bitter Serif for paragraphs and annotations. For the annotation text, its size is smaller than the paragraph texts and its style was set to bold for emphasis. 

From the sightline drawn, we can see the alignment was applied for both columns and rows(Figure 4).

Considering the readability, the number of words has been set to around 10 words per line on each column of the visualisation.

![img](https://lh3.googleusercontent.com/xYx1oPb_avBEuCr-7_1UrvjrBLtK_M1OUzmJieC_IG8V4IzYVSYeg9ED6VNX-ftgs84ZmM4bui86IwrVQOKdkxAXw1tL8fEDleo73Xx9KSpYOh_W-1SdusJ3HHPIQsjorX3A_1x1WkxBIx0pl3E88a3S4m-zWS35tryaAP7-10TEfg0_bzs6x-_ODl1xVw)
<br>*figure 4: The sightline of the whole visualisation*

### Storytelling

We will guide the viewers to read the visualisation from both up to down and left to right. 
The visualisation is divided into two sections. For the first section, viewers can tell the groups of males and females represented by different colours from the coloured text and emoji annotation in the bar chart(Figure 5) and by clicking on the doughnut chart, viewers can compare separately on different male and female groups while reading the text.(Figure 6). The same goes for interactions on the map (Figure 7) and the annotation on the map will attract the viewer's attention to the smallest place on the map.

![img](https://lh3.googleusercontent.com/Ntu8_fNdx8h6USfk0LR_MTZWFXGLBx8R9nplxSz3ymt0gYnLZquSz4GWqb_POTkDblodfmkYCumjRxTwySwc7mYSymZdRV9woGLjXCWERivOGBCBEx4Mny34X8TwNdzH-sAUXNDCL80qtl9Z_mUNx6S-IZtdLMjM92nL4emj33Xf5WW6gjCEPQ5BUrkXGw)

*figure 5: Coloured text and emoji will help readers get the corresponding information faster*

![img](https://lh6.googleusercontent.com/SVh1frgb5-fjcKqJxHjWHZaGAyPis-RIjRnJhPH03xJ5xFfiElKN-tuMh_hNao9hU-z1jrstOwOsXrLRwp2ntrq0bFXopXEeEmMIWnbGEaJaA4Eb2_9VMYnodQY09VD6MgjSDYski4W896sIuFQTckbeHky_0iV5yAD7H9Yd74FWAGo_TJNnRO87abM9Dw)

*figure 6: Interactivity is integrated into the two charts for individual comparisons*
![img](https://lh3.googleusercontent.com/KLWnw8jjKMOrcN7RIHLrj8pedwFAc-71LMGi-jv1ywVdVoMxAzRrmigBdmj2OAekv1W4Rip9q8PRrJNm5BA7ntk9wMTJCxy4Wfbhp-iO640Qamk_OV0cU79n5blHCZNDb0XzCXlpZoLHaLBX1ruTseF79bH8T9N_HEeZ6YZn0s3lDnGewR72ZBPFtswLPA)

*figure 7: Map is integrated with interactivity for individual comparisons*

As for the Nationality section, similar to the previous section, some keywords are colored to guide the reader. The flag elements(source from: https://hatscripts.github.io/circle-flags/) on the bump chart represents each corresponding country (Figure 8). In collaboration with the tooltip, it is easier to know the ranking changes of each country. Annotation of the line chart guides readers to get information from the overall visualisation(Figure 9).

![img](https://lh5.googleusercontent.com/ufCUinNl2wy2RlhN6HA1bYzbuhf94azUdiyoIg_5dIEwhYJ-XgZaggxdTErAhe7MlQXije5ejNUyi3xn_RGp2nwaME6CnPHDh-s0wTLMB4NBCiXw9PnjppG3RgDHnZsFfZjl9FNLUZaidW4fM9XBUNM06t07e2UVYARMnZfJB7-9vXE9QT4dXdr8lG-FvA)
<br>*figure 8: Coloured text and graphical elements(flag) in bump chart* 

![img](https://lh5.googleusercontent.com/8FcgOeUHL7ATtNna_B20fpNepr4_6CDMnxIPPXTt14LD3JO3viLqOuMgbVwMBDAR3Atnu0wfkWX90hU67YWi0VntXernziAixt9ftCYNJhEnEvh52aqET65IjxXEXX1ahH1sW5cHJpC1tsTpOfVkEgizgqJeTgUBt-noO6fZsV1e9Wv3Pn-ajTYOGGcWtA)
<br>*figure 9: Annotation of line chart gives the general information on the whole*

## Reference

1. 2021 Greater Melbourne, Census Community Profiles | Australian Bureau of Statistics. (n.d.). Retrieved October 17, 2022, from www.abs.gov.au website: https://www.abs.gov.au/census/find-census-data/community-profiles/2021/2GMEL
2. Variables by topic | Australian Bureau of Statistics. (2021, October 15). Retrieved October 17, 2022, from www.abs.gov.au website: https://www.abs.gov.au/census/guide-census-data/census-dictionary/2021/variables-topic
3. How the data is collected | Australian Bureau of Statistics. (2022, June 28). Retrieved October 17, 2022, from www.abs.gov.au website: https://www.abs.gov.au/census/guide-census-data/census-methodology/2021/how-data-collected
4. GmbH, D. (2018, May 29). What to consider when choosing colors for data visualization. Retrieved from Chartable website: https://blog.datawrapper.de/colors/
## Appendix 

### Five Design Sheet

### Appendix A

![img](https://lh4.googleusercontent.com/dBQ_nkSnWXQxInQ7LGtjSf1F9NimnoudEpLcrN1jwMg763NULsbncusY2s7kfITse2RwT6PnxelqOq5bfrpLMKh-QduwdOrXb-WrDmB4NA-NHgsBxl-O8Ko-n0VYolOVFTa44Ca5hw0LWsbo3FAh8y_kcDtVmMVBodKPA7DDbxiGJpipGkFHAmp6Fi7FLQ)

### Appendix B

![img](https://lh4.googleusercontent.com/mKIQme6PwXWUco4KczTMVhJ8EZ-GVLhKF1KvoLEqSGL8ungZL7Hjxtf2wFMJgkB6iyIjmQsrYMptY6ApID-W0vdIcWqrDdlXJRhp9LDnDPRsVaNIWhx-9ENJCnuuqwvWzptzZBcp_RLAzxEm_cvX9kKuz8ovRqKc7R0dpcNQnBh6oTGQI_4lJWTluOhXOQ)

### Appendix C

![img](https://lh6.googleusercontent.com/BNtNfDGmxk2_YU-IUKQy_u93HyQM5maQZtg3exAolDsEDEnBMfjapHc5WWXzVX3Y20UIxjB9HVb8DXXHvgprfOgXPrOALlCWrsS22LgUPCUvUP7qcAUS70H6eR7n2liqvFVZ_e1HQoVbF47qvIh1gQkjfYGCsHqHMWR0FocTJuTJdhTg6xNQGym9G0Oq3g)

### Appendix D

![img](https://lh4.googleusercontent.com/kbpdjpycTGw8_9Vld6J_VbjRIg4QKdxKOQLilsNcgKYSw-Nn0nRCBhmbU5c8npfPqtxDpJI-bBxtuBAm8fYntwiqoiIpa5e6noO1NWvav858E-m31r0CcgHupmMNSw1GNjmHlAiyVK2RX4Ttd4_gNsUwNxCLJdvL8ntwaECyY_koEd06AMlF1Q54OEh3Lg)

### Appendix E

![img](https://lh5.googleusercontent.com/c9VY_7jOESA83yCo7Mkf7mP_0u0BXngePIxKaUm5mdCXg49mPLnQX8fPGq8zwNeTr0xCfCQex3NB7Hxk4b_CXjoqIuo0Tq7aZcoWFj9lsJTXbYX3o0pzMlaxs22pzDYfYy3FYxWr7JMfVIUaF4zAJuKr5AL9yWUy9Vfj9FTsO_EJVLH4pMx7jRxdi8nNew)


