# Kullanım Dokümantasyonu

Bu dokümantasyonda React ile yazılmış bir servisi kullanabilmek için gerekli olan adımlar anlatılacaktır


## Node JS Kurulumu 

Projemizi çalıştırabilmek ve bağımlılıkları yükleyebilmek için ilk şartımız bilgisayarımızda **Node JS** yüklü olmalıdır. Eğer bilgisayarınızda Node JS yüklü değilse linke tıklayarak yükleme sayfasına gidebilirsiniz. [Node JS](https://nodejs.org/en/download/current)

## Servisin Çalıştırılması

React ve ViteJS kullanarak geliştirdiğimiz projeyi çalıştırabilmek için node_modules dosyamızın olması gereklidir.  Bu sebebten dolayı projenin root dizinindeyken terminal ekranımızı açıp, bağımlılıklarımızı yükleyebilmek maksadıyla `npm install` komutunu giriyoruz. İşlem bittikten sonra node_modules dosyasının oluştuğunu göreceğiz. `npm run dev` komutu ile projemizi çalıştırabiliriz.

## Projenin İçeriği

Proje;  Home ve FlightsScreen olmak üzere 2 sayfadan oluşmaktadır. Home sayfasında gerekli olan bilgiler doldurulup kırmızı butona basıldığında uçuş ekranı sayfasına yönlendiriliyor olacaksınız. 