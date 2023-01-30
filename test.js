require(["./src.js"], function (src) {
  QUnit.module("Testes de exemplo", {
    setup: function (assert) {},
    teardown: function (assert) {},
  });

  QUnit.module("Contando Dias");
  QUnit.test("Test retorno dia", function (assert) {
    assert.equal(src.calculaDiferencaEntreDias("2023-01-27", "2023-01-22"), 5);
  });
  QUnit.test("Test retorno dia", function (assert) {
    assert.equal(src.diferencaDiasEntreAnos(2011, 2014), 1);
  });
  QUnit.test("Test retorno dia", function (assert) {
    assert.equal(src.diasEntreMes(02, 2000), 29);
  });
});
