const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime");

const battery = () => {
    if ("getBattery" in navigator) {
        navigator.getBattery().then(battery => {
            function updateAllBatteryDetails() {
                updateChargingInfo();
                updateLevelChange();
                updateDisChargingTimeInfo();
                updateChargingTimeChangeInfo();
            }
            updateAllBatteryDetails();
            // Battery Charging Change
            battery.addEventListener('chargingchange', () => {
                updateChargingInfo();
            });
            function updateChargingInfo() {
                const isCharging = battery.charging ? "Yes" : "No";
                console.log(isCharging);
                batteryCharging.innerHTML = isCharging;

            }


            // Battery Charging Time
            battery.addEventListener('chargingtimechange', () => {
                console.log("Charging time has changed");
            });
            function updateChargingTimeChangeInfo(){
                console.log(battery.chargingTime);
                batteryChargingTime.innerHTML = battery.chargingTime + " second"
            }

            // Battery Discharging time

            battery.addEventListener('dischargingtimechange', () => {
                console.log("Discharging time has changed");
            });
            function updateDisChargingTimeInfo() {
                batteryDisChargingTime.innerHTML = battery.dischargingTime + " Second";
            }


            // Battery level change
            battery.addEventListener('levelchange', () => {
                updateLevelChange();
            })

            function updateLevelChange() {
                const level = battery.level * 100 + "%";
                batteryLevel.innerHTML = level;
                // Battery Status
            }
        });
    }
};
battery();