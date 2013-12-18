var should = require('should')
describe('msexcel-builder', function() {
  it('should create a spreadsheet', function(done) {
    var excel = require('../lib')
    var filename = 'test.xlsx'
    var wb = excel.createWorkbook(__dirname, filename)
    var sheet = wb.createSheet('Test', 6, 21)
    for (var i=1; i<21; i++) {
      sheet.setDate(1, i)
      sheet.set(2, i, 200)
      sheet.set(3, i, 200)
      sheet.set(4, i, 'This is a test')
      sheet.set(5, i, 'This is a test')
      sheet.set(6, i, 'This is a test')
    }

    var total = 20*200
    sheet.setFormula(2, 21, 'SUM(B1:B20)', total)
    sheet.setFormula(3, 21, 'SUM(C1:C20)', total)

    wb.save(function(err) {
      should.ifError(err)
      done()
    })
  })
})