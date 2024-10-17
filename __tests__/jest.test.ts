import { describe, expect, test } from "@jest/globals";

import { validEmail, Version } from "../index";

describe('validate email', () => {
  test('123456789@qq.com to be true', () => {
    expect(validEmail('123456789@qq.com')).toBe(true);
  });

  /**
   * toBe uses Object.is to test exact equality
   * toBe
   * 
   * check the value of an object
   * toEqual
   * 
   * toBeNull
   * toBeTruthy
   * toBeFalsy
   * 
   * toBeGreaterThan
   * toBeGreaterThanOrEqual
   * toBeLessThan
   * 
   * toMatch(/stop/)
   * 
   * toContain
   * toHaveLength
   * 
   * 
   */
  test('1+1 is not 3', () => {
    expect(1+1).not.toBe(3);
  })

  test('Version is 1.0.5', () => {
    expect(Version).toMatch('1.0.5');
  })
});