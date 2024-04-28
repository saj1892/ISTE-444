CREATE TABLE `pickupLocation` (
  `Address` VARCHAR(255),
  `locationName` VARCHAR(255) NOT NULL,
  `OperationHours` VARCHAR(255),
  `latitude` FLOAT,
  `longitude` FLOAT,
  PRIMARY KEY (`locationName`)
);

CREATE TABLE `Inventory` (
  `itemID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255),
  `ToolType` VARCHAR(255),
  `locationName` VARCHAR(255),
  `description` VARCHAR(255),
  `available` BOOL,
  `lendie` VARCHAR(255),
  `lender` VARCHAR(255),
  `photo` VARCHAR(255),  
  PRIMARY KEY (`itemID`),
  FOREIGN KEY (`locationName`) REFERENCES `pickupLocation`(`locationName`)
);

CREATE TABLE `Renter` (
  `lendie` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255),
  `duration` DATE,
  PRIMARY KEY (`lendie`)
);
