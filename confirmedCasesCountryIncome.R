data <- read.csv("covidConfirmedCasesCountryIncome.csv")
df <- data.frame(data)
df[is.na(df)] <- 0
df['id']<-seq(1,nrow(df))
write.csv(df,"covidConfirmedCasesCountryIncomeCleaned.csv", row.names = TRUE)
system("/home/ec2-user/exportDataCountryIncome.sh")

