INSERT INTO pickupLocation (Address, locationName, OperationHours, latitude, longitude) VALUES
('1234 Elm Street, Rochester, NY', 'Elm Street Depot', '09:00 - 17:00', 43.1566, -77.6088),
('5678 Maple Drive, Rochester, NY', 'Maple Drive Center', '08:00 - 18:00', 43.1625, -77.6109),
('91011 Oak Avenue, Rochester, NY', 'Oak Avenue Spot', '10:00 - 16:00', 43.1655, -77.6113),
('1213 Pine Road, Rochester, NY', 'Pine Road Hub', '07:00 - 19:00', 43.1534, -77.6159),
('1415 Birch Boulevard, Rochester, NY', 'Birch Boulevard Station', '06:00 - 20:00', 43.1547, -77.6175);

INSERT INTO Inventory (Name, ToolType, locationName, description, available, lendie, lender, photo) VALUES
('Claw Hammer', 'Hand Tools', 'Elm Street Depot', 'A durable claw hammer for general carpentry.', true, NULL, 'John Doe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Claw-hammer.jpg/290px-Claw-hammer.jpg'),
('Screwdriver Set', 'Hand Tools', 'Maple Drive Center', 'A set of Phillips and flat-head screwdrivers.', true, NULL, 'Jane Smith', 'https://sonictoolsusa.com/wp-content/uploads/2019/06/602407__44634.1588695415.1280.1280.jpg'),
('Laser Cutter', 'Electronic Device', 'Pine Road Hub', 'High precision laser cutter for detailed work.', true, NULL, 'Bob Brown', 'https://m.media-amazon.com/images/I/71NL2kgzLCL.jpg'),
('Respirator Mask', 'PPE', 'Birch Boulevard Station', 'Provides respiratory protection against dust and chemical fumes.', true, NULL, 'Carol White', 'https://images.thdstatic.com/productImages/0f5ccd7b-e2fe-44a4-954f-d96f5f6ff0f2/svn/white-dyiom-half-mask-respirators-b01nd42p1z-64_600.jpg'),
('Safety Gloves', 'PPE', 'Elm Street Depot', 'Protective gloves suitable for handling hazardous materials.', true, NULL, 'Dave Black', 'https://m.media-amazon.com/images/I/71qaT4R4-7L._AC_UF894,1000_QL80_.jpg'),
('Multimeter', 'Electronic Tool', 'Maple Drive Center', 'Essential tool for measuring voltage, current, and resistance.', true, NULL, 'Eve Green', 'https://m.media-amazon.com/images/I/71OOuoWXvFL._AC_UF1000,1000_QL80_.jpg'),
('Soldering Kit', 'Electronic Tool', 'Oak Avenue Spot', 'Complete kit for electronics soldering projects.', true, NULL, 'Frank Cyan', 'https://m.media-amazon.com/images/I/61KhZCpqmYL._AC_UF894,1000_QL80_DpWeblab_.jpg'),
('Cordless Drill', 'Power Tool', 'Pine Road Hub', 'Versatile tool for drilling holes and driving screws.', true, NULL, 'Grace Magenta', 'https://m.media-amazon.com/images/I/711V9f3nOZL._AC_UF894,1000_QL80_.jpg'),
('Circular Saw', 'Power Tool', 'Birch Boulevard Station', 'Powerful saw for making quick and straight cuts.', true, NULL, 'Henry Yellow', 'https://images.thdstatic.com/productImages/ecde8b74-ca64-40c2-a516-a922fe1132cc/svn/dewalt-circular-saws-dcs391b-c3_600.jpg'),
('Adjustable Wrench', 'Hand Tools', 'Elm Street Depot', 'A tool with adjustable jaw to grip various sized nuts and bolts.', true, NULL, 'Ivan Orange', 'https://m.media-amazon.com/images/I/71UQTCpwndL.jpg'),
('Ear Protection', 'PPE', 'Oak Avenue Spot', 'Ear muffs to protect against noise-induced hearing loss.', true, NULL, 'Kyle Blue', 'https://m.media-amazon.com/images/I/717fnBzSWZL.jpg'),
('Heat Gun', 'Electronic Tool', 'Pine Road Hub', 'Tool for emitting a stream of hot air, useful in physics experiments.', true, NULL, 'Laura Grey', 'https://www.harborfreight.com/media/catalog/product/cache/9fc4a8332f9638515cd199dd0f9238da/5/6/56434_W3.jpg'),
('Angle Grinder', 'Power Tool', 'Birch Boulevard Station', 'Handheld power tool for grinding and polishing.', true, NULL, 'Moe Pink', 'https://images.thdstatic.com/productImages/6ea5fb01-f95a-4eec-b060-904530e3ed37/svn/dewalt-angle-grinders-dwe402w-64_600.jpg'),
('Pliers', 'Hand Tools', 'Elm Street Depot', 'Pincers with parallel, flat, and typically serrated surfaces, used for gripping small objects or bending wire.', true, NULL, 'Nina Teal', 'https://m.media-amazon.com/images/I/71FSIonNe3L.jpg'),
('3D Printer', 'Electronic Device', 'Maple Drive Center', 'A printer that can produce three-dimensional objects.', true, NULL, 'Oscar Lime', 'https://m.media-amazon.com/images/I/61L4aoIqYOL._AC_UF894,1000_QL80_DpWeblab_.jpg'),
('Face Shield', 'PPE', 'Oak Avenue Spot', 'Protects the wearer\'s entire face from hazards such as flying objects and road debris, chemical splashes, or potentially infectious materials.', true, NULL, 'Pat Silver', 'https://mobileimages.lowes.com/productimages/b02e8d8a-4206-4fc4-86e1-cd5d7de7a623/64035458.jpg');


INSERT INTO users (username, password) VALUES 
('alice123', 'password123'),
('bob456', 'password456'),
('charlie789', 'password789'),
('david001', 'password001'),
('eve002', 'password002');