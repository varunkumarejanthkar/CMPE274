download.file("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations-by-manufacturer.csv","/home/ec2-user/vaccinationsByManufacturer.csv")
data <- read.csv("vaccinationsByManufacturer.csv")
print(nrow(data))
df <- data.frame(data)
df[is.na(df)] <- 0
df['id']<-seq(1,nrow(df))
write.csv(df,"vaccinationsByManufacturer-cleaned.csv", row.names = FALSE)
system("/home/ec2-user/exportVaccinationsByManufacturerDataCassandra.sh")
