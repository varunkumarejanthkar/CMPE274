download.file("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv","/home/ec2-user/vaccinations.csv")
data <- read.csv("vaccinations.csv")
print(nrow(data))
df <- data.frame(data)
df[is.na(df)] <- 0
df['id']<-seq(1,nrow(df))
write.csv(df,"vaccinations-cleaned.csv", row.names = FALSE)
system("/home/ec2-user/exportVaccinationDataCassandra.sh")
