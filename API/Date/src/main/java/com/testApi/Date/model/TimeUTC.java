package com.testApi.Date.model;

import java.text.ParseException;

public class TimeUTC {
	private String time;
	private String timezone;
	
	public TimeUTC(String time, String timezone) throws ParseException {
		this.setTime(time);
		this.setTimezone(timezone);
	}
	
	public void getSimpleTime(){
        String[] array = time.split(":");
        int hour = Integer.parseInt(array[0]);
        int newHour = hour + Integer.parseInt(timezone);

        if(newHour < 0) {
            newHour += 12;
        }
        array[0] = newHour + "";
        time = String.join(":", array);
        timezone = "utc";
    }

	public String getTimezone() {
		return timezone;
	}

	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
}
