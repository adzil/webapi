/**
 * Sample test file for TypeScript project
 * You should always use .spec.ts as the extension of the test file
 * and "import mocha = require('mocha')" to fix compile error on Windows
 * Copyright (c) 2016 Fadhli Dzil Ikram
 */

import mocha = require('mocha')
import chai = require('chai')
import chaiAsPromised = require('chai-as-promised')
import { expect } from 'chai'
chai.use(chaiAsPromised)

import main from '../src'

describe('main file', function () {
  it('should be a function', function() {
    expect(main).to.be.a('function')
  })
  it('should return promise', function () {
    expect(main()).to.be.a('promise')
  })
  it('returned promise should resolved with true', function() {
    return expect(main()).to.eventually.equal(true)
  })
})
