# 콜백함수

# * 매개변수가 하나
# 정의
def call(func):
  func()

def hello():
  print("hello")

# 호출
call(hello)

# todo 매개변수가 하나일 때, 두 개의 함수를 정의하지 않고, 하나로 묶어 정의하는 방식이 있는지 알아보기

# * 매개변수가 둘 
# 정의
def add(a,b):
  return a+b

# 호출
print(add(2,3))