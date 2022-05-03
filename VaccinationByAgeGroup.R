download.file("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations-by-age-group.csv","/home/ec2-user/vaccinationsByAgeGroup.csv")
data <- read.csv("vaccinationsByAgeGroup.csv")
print(nrow(data))
df <- data.frame(data)
df[is.na(df)] <- 0
df['id']<-seq(1,nrow(df))
write.csv(df,"vaccinationsByAgeGroup-cleaned.csv", row.names = FALSE)
system("/home/ec2-user/exportVaccinationsByAgeGroupDataCassandra.sh")
