/**
 * 
 */
package com.testApi.Date.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.testApi.Date.model.Response;
import com.testApi.Date.model.TimeUTC;

/**
 * @author Brayhan
 *
 */

@RestController
@RequestMapping("/api/getTimeUTC")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class DateResources {	
	

	@PostMapping
	public ResponseEntity<Response<TimeUTC>> getTime(@RequestBody TimeUTC timeUTC){
		Response<TimeUTC> res = new Response<TimeUTC>();
	
		timeUTC.getSimpleTime();
		res.setResponse(timeUTC);

		return ResponseEntity.ok(res);
	}
}
