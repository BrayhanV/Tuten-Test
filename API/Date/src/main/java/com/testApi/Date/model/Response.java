/**
 * 
 */
package com.testApi.Date.model;

import lombok.Data;

/**
 * @author Brian
 * @param <T>
 *
 */
@Data
public class Response<T> {
	private T response;

	public T getResponse() {
		return response;
	}

	public void setResponse(T response) {
		this.response = response;
	}
}
