# NodeJS-ExpressJS
Starting in backend development.


Clase 1/6 - TTADS
* Multer > Repo celu
* Mongoose
  > ActiveRecord + Schema
  > en los arrays a otro schema usar ref="Model"   let boby = new Pet({name:'boby', specie:'dog', owner: john}); usar esto para agregar
  > Populate te trae la info por el ID relacionado
  > Puedo popular unos niveles pero mas hay que crear un metodo custom
  > 
* Bases key value -> Id correspondiente a una estructura || Complicado hacer querys complejas
* Object mapping (Relational || Document) Librerias!
  > Dan info para convertir los objs a esquema y aplicar codigo en relaciobn. Ej Model.save(obj)  
  > M a N ODM saca ventaja (equivalencia) entre obj y tablas || Mas codigo en relacional
  > Patrones de acceso a db -> ActiveRecord y DataMapper
    - ORM pueden usar los dos. ActiveRecord tiene correspondencia entre obj y tabla, cada obj es una fila,
      ej Un Item es una fila en la tabla Compra. Las entidades tienen los metodos.
    - DataMapper separa logica de datos. FK en ambos son referencias de objs. Tablas son repositorios.
    - Decoradores vs Schema   | typeORM 
