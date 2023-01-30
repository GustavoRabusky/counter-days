require(["./src.js"], function (src) {
  QUnit.module("Testes de exemplo", {
    setup: function (assert) {},
    teardown: function (assert) {},
  });

  QUnit.module("Contando Dias");
  QUnit.module("Calculando diferença dias - o teste principal");
  QUnit.test("Teste #1 - duas datas no mesmo mês", function (assert) {
    assert.equal(src.getDiffDias("2023-01-26", "2023-01-27"), 1);
  });
  QUnit.test("Teste #2 - duas datas em meses subsequentes", function (assert) {
    assert.equal(src.getDiffDias("2023-01-26", "2023-02-20"), 25);
  });
  QUnit.test(
    "Teste #3 - datas em meses subsequentes - fevereiro de ano não bissexto",
    function (assert) {
      assert.equal(src.getDiffDias("2023-02-26", "2023-03-20"), 22);
    }
  );
  QUnit.test(
    "Teste #4 - datas em meses subsequentes - fevereiro de ano bissexto",
    function (assert) {
      assert.equal(src.getDiffDias("2024-02-26", "2024-03-20"), 23);
    }
  );
  QUnit.test("Teste #5 - datas em intervalos de meses", function (assert) {
    assert.equal(src.getDiffDias("2023-03-01", "2023-09-20"), 203);
  });

  QUnit.test(
    "Teste #6 - datas em intervalos de meses em ano bissexto",
    function (assert) {
      assert.equal(src.getDiffDias("2024-01-01", "2024-12-31"), 365);
    }
  );

  QUnit.test("Teste #7 - datas em ano subsequente", function (assert) {
    assert.equal(src.getDiffDias("2023-12-15", "2024-01-15"), 31);
  });

  QUnit.test("Teste #8 - datas em ano diferentes", function (assert) {
    assert.equal(src.getDiffDias("2020-08-30", "2024-01-15"), 1233);
  });

  QUnit.test(
    "Teste #9 - datas em ano diferentes, passando ano bissexto",
    function (assert) {
      assert.equal(src.getDiffDias("2019-08-10", "2024-09-01"), 1849);
    }
  );

  QUnit.test(
    "Teste #10 - número de dias deste o dia 01/01/1970",
    function (assert) {
      assert.equal(src.getDiffDias("2023-01-27", "1970-01-01"), 19384);
    }
  );
});
