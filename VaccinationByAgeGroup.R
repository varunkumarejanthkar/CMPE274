{\rtf1\ansi\ansicpg1252\cocoartf2578
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\csgray\c0;}
\margl1440\margr1440\vieww13780\viewh15320\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\tx7938\pardirnatural\partightenfactor0

\f0\fs22 \cf2 \CocoaLigature0 download.file(\'93https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations-by-age-group.csv\'94,\'94/home/ec2-user/vaccinationsByAgeGroup.csv")\
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural\partightenfactor0
data <- read.csv(\'93vaccinationsByAgeGroup.csv")\
print(nrow(data))\
df <- data.frame(data)\
df[is.na(df)] <- 0\
df['id']<-seq(1,nrow(df))\
write.csv(df,\'94vaccinationsByAgeGroup-cleaned.csv", row.names = FALSE)\
system("/home/ec2-user/exportVaccinationsByAgeGroupDataCassandra.sh")}