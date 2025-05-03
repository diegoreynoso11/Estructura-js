import { test, expect } from '@playwright/test'

test.describe('Pruebas E2E Carrito de compras - saucedemo', () => {
  test.beforeEach(async ({ page }) => {
    // Visitar la página antes de iniciar las pruebas
    // utilizamos Saucedemo (pagina para realizar pruebas de e2e)
    await page.goto('https://www.saucedemo.com/?spm=a2ty_o01.29997173.0.0.f2c65171RgGUzt')
  })
  test('debería iniciar sesión', async ({ page }) => {
    // Verificamos que el inicio de sesión funcione
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  })
  test('debería añadir productos al carrito', async ({ page }) => {
    // Iniciar sesión
    await login(page)
    // Añadir un producto al carrito
    await page.click('#add-to-cart-sauce-labs-backpack')
    // Verificar que el contador del carrito se actualice
    const cartCount = await page.textContent('.shopping_cart_badge')
    // Verificar que el contador del carrito sea 1
    expect(cartCount).toBe('1')
    // Agregar otro producto al carrito
    await page.click('#add-to-cart-sauce-labs-onesie')
    const actualicedCartCount = await page.textContent('.shopping_cart_badge')
    // Verificar de nuevo el contador del carrito
    expect(actualicedCartCount).toBe('2')
  })
  test('deberían encontrarse los productos en el carrito', async ({ page }) => {
    // Iniciamos sesión
    await login(page)
    // Añadimos productos al carrito
    await page.click('#add-to-cart-sauce-labs-backpack')
    await page.click('#add-to-cart-sauce-labs-onesie')
    // Hacemos clic en el carrito de compras
    await page.click('.shopping_cart_link')
    // Seleccionamos los elementos dentro del carrito
    const cartList = await page.locator('.cart_item').all()
    expect(cartList.length).toBe(2)
  })
  test('debería realizar correctamente el checkout', async ({ page }) => {
    // Iniciamos sesión
    await login(page)
    // Añadimos productos al carrito
    await page.click('#add-to-cart-sauce-labs-backpack')
    await page.click('#add-to-cart-sauce-labs-onesie')
    // Hacemos clic en el carrito de compras
    await page.click('.shopping_cart_link')
    // Hacemos clic en el botón de checkout
    await page.click('#checkout')
    // Llenamos el formulario de checkout
    await page.fill('#first-name', 'Juan')
    await page.fill('#last-name', 'Pérez')
    await page.fill('#postal-code', '12345')
    // Hacemos clic en el botón de continuar
    await page.click('#continue')

    // Hacemos clic en el botón de finalizar compra
    await page.click('#finish')
    const cart = await page.textContent('.shopping_cart_link')
    // Verificar que el contador del carrito este vació
    expect(cart).toBe('')
  })
  test('debería cerrar sesión correctamente', async ({ page }) => {
    // Iniciamos sesión
    login(page)
    // clic en el botón hamburguesa
    await page.click('#react-burger-menu-btn')
    // clic en el botón de logout
    await page.click('#logout_sidebar_link')
    // Intentar navegar a una página restringida
    await page.goto('https://www.saucedemo.com/inventory.html')
    // Verificamos que el usuario haya sido redirigido a la página de inicio de sesión
    await page.waitForURL('https://www.saucedemo.com/')
    const currentUrl = page.url()
    expect(currentUrl).toBe('https://www.saucedemo.com/')
  })
})

async function login (page) {
  await page.fill('#user-name', 'standard_user')
  await page.fill('#password', 'secret_sauce')
  await page.click('#login-button')
}
