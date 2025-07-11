// General function to calculate and display time since a given start date
        function updateCounter(startDate, elementId, message) {
            let now = new Date();
            
            // Initialize variables for year, month, day, hour, minute, second
            let xronia = now.getFullYear() - startDate.getFullYear();
            let mhnes = now.getMonth() - startDate.getMonth();
            let meres = now.getDate() - startDate.getDate();
            let ores = now.getHours() - startDate.getHours();
            let lepta = now.getMinutes() - startDate.getMinutes();
            let deytera = now.getSeconds() - startDate.getSeconds();

            // Handle negative values (e.g., if current month/day/hour is before the start)
            if (deytera < 0) {
                deytera += 60;
                lepta--;
            }
            if (lepta < 0) {
                lepta += 60;
                ores--;
            }
            if (ores < 0) {
                ores += 24;
                meres--;
            }
            if (meres < 0) {
                let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Get the last day of the previous month
                meres += prevMonth.getDate(); // Add the days of the previous month to the difference
                mhnes--;
            }
            if (mhnes < 0) {
                mhnes += 12;
                xronia--;
            }

            // Update the innerHTML with the formatted message
            document.getElementById(elementId).innerHTML =
                `It's been <span class="number">${xronia}</span> year(s), 
                <span class="number">${mhnes}</span> month(s), 
                <span class="number">${meres}</span> day(s), 
                <span class="number">${ores}</span> hour(s), 
                <span class="number">${lepta}</span> minute(s), and 
                <span class="number">${deytera}</span> second(s) ${message}`;
        }

        // Start date for last drink and last drug use
        let drinkStartDate = new Date("2023-09-01T03:45:00");
        let drugUseStartDate = new Date("2022-02-25T22:00:00");

        // Run the function immediately to avoid showing "weird" numbers before the first update
        function updateAllCounters(){
            updateCounter(drinkStartDate, "booze", "since my last drink");
            updateCounter(drugUseStartDate, "drugUse", "since I last got high");
        }

        // Update the counters every second (1000 milliseconds)
        updateAllCounters();
        setInterval(updateAllCounters, 1000);
