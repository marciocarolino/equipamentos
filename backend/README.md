#Será feito um CRUD básico, para registrar equipamentos de computador.
#Utilizar o mongoDB
#Exemplo.: Nome do computador, IP, Quantidade de memória, HD, Etc....



#Lista do que preciso fazer
- [x] iniciar o projeto com nodejs
- [x] instalar o nodemon, configurar o package.json
- [x] instalar o express
- [x] criar o arquivo index e usar o express
- [x] criar primeira rota.
- [x] criar primeiro controller
- [x] instalar o mongoose
- [x] conectar com o banco mongoose.
- [x] criar models
- [x] Realizar o add dos equipamentos no MongoDB.

/*========================================*/

**==> Criar schema para registrar Computador**
1. -> Registrar máquina cliente Computador
#Campos necessários para cadastrar o equipamento:
* nome usuário
* nome computador
* IP computador
* Setor ('onde o computador encontra-se')
* ramal
* e-mail usuario
* active ('se o usuário está ativo ou não')

**==> Criar schema para registrar equipamentos de rede**
2. --> Registrar switch
* Nome do equipamento
* Modelo do equipamento
* Local que está o equipamento
* data da compra
* Responsável
* Ramal Rensponsável

**3 --> Registrar Máquinas Servidores**
* Nome do Servidor
* OS do servidor
* Versão do OS
* Descrição do Servidor
* Responsável
* Ramal Responsável do Servidor

==> Criar schema para registrar todos os ramais.