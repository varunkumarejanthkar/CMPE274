{\rtf1\ansi\ansicpg1252\cocoartf2578
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\csgray\c0;}
\margl1440\margr1440\vieww28300\viewh17140\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural\partightenfactor0

\f0\fs22 \cf2 \CocoaLigature0 download.file("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.csv\'94,\'94/Users/bharath/covid-data.csv")\
data <- read.csv("covid-data.csv")\
print(nrow(data))\
df <- data.frame(data)\
df = subset(df, select = -c(new_cases_smoothed,new_deaths_smoothed,new_cases_smoothed_per_million,new_deaths_smoothed_per_million,reproduction_rate,icu_patients,icu_patients_per_million,hosp_patients,hosp_patients_per_million,weekly_icu_admissions,weekly_icu_admissions_per_million,weekly_hosp_admissions,weekly_hosp_admissions_per_million,new_tests_smoothed,new_tests_smoothed_per_thousand,positive_rate,tests_per_case,tests_units,new_vaccinations_smoothed,total_boosters_per_hundred,new_vaccinations_smoothed_per_million,new_people_vaccinated_smoothed,new_people_vaccinated_smoothed_per_hundred,stringency_index,population,population_density,median_age,aged_65_older,aged_70_older,gdp_per_capita,extreme_poverty,cardiovasc_death_rate,diabetes_prevalence,female_smokers,male_smokers,handwashing_facilities,hospital_beds_per_thousand,life_expectancy,human_development_index,excess_mortality_cumulative_absolute,excess_mortality_cumulative,excess_mortality,excess_mortality_cumulative_per_million))\
\
df[is.na(df)] <- 0\
df['id']<-seq(1,nrow(df))\
\
write.csv(df,"covid-data-cleaned.csv", row.names = TRUE)\
#writeLines(nrow(df),"rowCount.txt")\
system("/home/ec2-user/exportData.sh")\
#bin/dsbulk load -url "/home/ec2-user/covid-data-cleaned.csv" -k test -t covid_data_2 -b "/home/ec2-user/secure-connect-cassandra.zip" -u xpGxusKfIeHRPgfWqHYFFtyk -p dMnJ.nQCk6obYq+WAKGJB_WPiINIgfyq0Q2mf.AnZiX8fKyStiX+F.MAsqhhy5_Pt_xQhlX8m_Jhwinim9BjgEtGmrAQ1r6GdkbXN7Kbq,0EL0LSvK,qLeUvsPGhOfop -header true}