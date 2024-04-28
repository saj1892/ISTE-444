INSERT INTO pickupLocation (Address, locationName, OperationHours, latitude, longitude) VALUES
('1234 Elm Street, Rochester, NY', 'Elm Street Depot', '09:00 - 17:00', 43.1566, -77.6088),
('5678 Maple Drive, Rochester, NY', 'Maple Drive Center', '08:00 - 18:00', 43.1625, -77.6109),
('91011 Oak Avenue, Rochester, NY', 'Oak Avenue Spot', '10:00 - 16:00', 43.1655, -77.6113),
('1213 Pine Road, Rochester, NY', 'Pine Road Hub', '07:00 - 19:00', 43.1534, -77.6159),
('1415 Birch Boulevard, Rochester, NY', 'Birch Boulevard Station', '06:00 - 20:00', 43.1547, -77.6175);

INSERT INTO Inventory (Name, ToolType, locationName, description, available, lendie, lender, photo) VALUES
('Claw Hammer', 'Hand Tools', 'Elm Street Depot', 'A durable claw hammer for general carpentry.', true, NULL, 'John Doe', 'https://example.com/images/claw_hammer.jpg'),
('Screwdriver Set', 'Hand Tools', 'Maple Drive Center', 'A set of Phillips and flat-head screwdrivers.', true, NULL, 'Jane Smith', 'https://example.com/images/screwdriver_set.jpg'),
('Oscilloscope', 'Electronic Device', 'Oak Avenue Spot', 'Device for viewing the frequency of electrical waves.', true, NULL, 'Alice Johnson', 'https://example.com/images/oscilloscope.jpg'),
('Laser Cutter', 'Electronic Device', 'Pine Road Hub', 'High precision laser cutter for detailed work.', true, NULL, 'Bob Brown', 'https://example.com/images/laser_cutter.jpg'),
('Respirator Mask', 'PPE', 'Birch Boulevard Station', 'Provides respiratory protection against dust and chemical fumes.', true, NULL, 'Carol White', 'https://example.com/images/respirator_mask.jpg'),
('Safety Gloves', 'PPE', 'Elm Street Depot', 'Protective gloves suitable for handling hazardous materials.', true, NULL, 'Dave Black', 'https://example.com/images/safety_gloves.jpg'),
('Multimeter', 'Electronic Tool', 'Maple Drive Center', 'Essential tool for measuring voltage, current, and resistance.', true, NULL, 'Eve Green', 'https://example.com/images/multimeter.jpg'),
('Soldering Kit', 'Electronic Tool', 'Oak Avenue Spot', 'Complete kit for electronics soldering projects.', true, NULL, 'Frank Cyan', 'https://example.com/images/soldering_kit.jpg'),
('Cordless Drill', 'Power Tool', 'Pine Road Hub', 'Versatile tool for drilling holes and driving screws.', true, NULL, 'Grace Magenta', 'https://example.com/images/cordless_drill.jpg'),
('Circular Saw', 'Power Tool', 'Birch Boulevard Station', 'Powerful saw for making quick and straight cuts.', true, NULL, 'Henry Yellow', 'https://example.com/images/circular_saw.jpg'),
('Adjustable Wrench', 'Hand Tools', 'Elm Street Depot', 'A tool with adjustable jaw to grip various sized nuts and bolts.', true, NULL, 'Ivan Orange', 'https://example.com/images/adjustable_wrench.jpg'),
('Pressure Sensor', 'Electronic Device', 'Maple Drive Center', 'Sensor to measure pressure in fluids and gases.', true, NULL, 'Julia Violet', 'https://example.com/images/pressure_sensor.jpg'),
('Ear Protection', 'PPE', 'Oak Avenue Spot', 'Ear muffs to protect against noise-induced hearing loss.', true, NULL, 'Kyle Blue', 'https://example.com/images/ear_protection.jpg'),
('Heat Gun', 'Electronic Tool', 'Pine Road Hub', 'Tool for emitting a stream of hot air, useful in physics experiments.', true, NULL, 'Laura Grey', 'https://example.com/images/heat_gun.jpg'),
('Angle Grinder', 'Power Tool', 'Birch Boulevard Station', 'Handheld power tool for grinding and polishing.', true, NULL, 'Moe Pink', 'https://example.com/images/angle_grinder.jpg'),
('Pliers', 'Hand Tools', 'Elm Street Depot', 'Pincers with parallel, flat, and typically serrated surfaces, used for gripping small objects or bending wire.', true, NULL, 'Nina Teal', 'https://example.com/images/pliers.jpg'),
('3D Printer', 'Electronic Device', 'Maple Drive Center', 'A printer that can produce three-dimensional objects.', true, NULL, 'Oscar Lime', 'https://example.com/images/3d_printer.jpg'),
('Face Shield', 'PPE', 'Oak Avenue Spot', 'Protects the wearer\'s entire face from hazards such as flying objects and road debris, chemical splashes, or potentially infectious materials.', true, NULL, 'Pat Silver', 'https://example.com/images/face_shield.jpg'),
('Electric Screwdriver', 'Electronic Tool', 'Pine Road Hub', 'A power tool for driving screws; it is fitted with a mechanism that rotates the screw.', true, NULL, 'Quinn Gold', 'https://example.com/images/electric_screwdriver.jpg'),
('Table Saw', 'Power Tool', 'Birch Boulevard Station', 'A woodworking tool consisting of a circular saw blade, mounted on an arbor, that is driven by an electric motor.', true, NULL, 'Ruby Cherry', 'https://example.com/images/table_saw.jpg');